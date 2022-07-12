import React from 'react';
import {connect} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import s from '../Formik/Control/style.module.css';
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const LoginForm = (props) => {
    let initialValues = {
        email: '',
        password: '',
        rememberMe: false,
        general: ""
    };

    const onSubmit = (values, {setFieldValue, setSubmitting }) => {
        //console.log(JSON.stringify(values, null, 2));
        props.login(values.email, values.password, values.rememberMe, setFieldValue);
        setSubmitting(false);
    }

    const validationSchema = yup.object({
        email: yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: yup.string().required('Required'),
    });

    //console.log('Formik errors ', formik.errors)
    //console.log('Formik touched ', formik.touched)
    //console.log(formik.values)

    return <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return <Form>
                            <div className={s.formControl}>
                                {/*<FormikControl control={'input'} type={'email'} label={'Login'} name={'email'}/>*/}
                                <Field placeholder={"Email"} name='email' type={"email"}/>
                            </div>
                            <ErrorMessage name={'email'}>
                                {e => <div className={s.error}>{e}</div>}
                            </ErrorMessage>

                            <div className={s.formControl}>
                                <Field placeholder={"Password"} name='password' type={"password"}/>
                            </div>
                            <ErrorMessage name={'password'}>
                                {e => <div className={s.error}>{e}</div>}
                            </ErrorMessage>

                            <div className={s.error}>
                                {formik.values.general ? <span>{formik.values.general}</span>: null}
                            </div>

                            <div>
                                <Field name='rememberMe' type="checkbox"/>remember me
                            </div>

                            <div>
                                <button type={"submit"} disabled={!formik.isValid}>LogIn</button>
                            </div>
                </Form>
            }
        }
    </Formik>
};

function Login(props) {
    if (props.isAuth){
        return <Navigate to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginForm login={props.login}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)