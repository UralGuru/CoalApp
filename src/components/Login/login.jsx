import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from "formik";
import * as yup from 'yup';
import s from './login.module.css'

const LoginForm = () => {

    let initialValues = {
        login: '',
        password: '',
    };

    let onSubmit = (values) => {
        console.log(values);
    };

    const validationSchema = yup.object({
        login: yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: yup.string().required('Required'),
    });

    //console.log('Formik errors ', formik.errors)
    //console.log('Formik touched ', formik.touched)

    return <Formik initialValues={initialValues}
                   validationSchema={validationSchema}
                   onSubmit={onSubmit}>
            <Form>
                <div className={s.formControl}>
                    <Field placeholder={"Login"}
                           name='login'
                           type={"email"}/></div>
                {/*<ErrorMessage name={'login'}/>*/}
                <ErrorMessage name={'login'}>
                    {errorMessage => <div className={s.error}>{errorMessage}</div>}
                </ErrorMessage>

                <div className={s.formControl}>
                    <Field placeholder={"Password"}
                           name='password'
                           type={"password"}/></div>
                {/*<ErrorMessage name={'password'}/>*/}
                <ErrorMessage name={'password'}>
                    {errorMessage => <div className={s.error}>{errorMessage}</div>}
                </ErrorMessage>

                <div>
                    <input type={"checkbox"}/>remember me
                </div>

                <div>
                    <button type={"submit"}>LogIn</button>
                </div>
            </Form>
    </Formik>

};

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login