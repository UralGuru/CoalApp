import React from 'react';
import {useFormik} from "formik";
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

    let validate = (values) => {
        let errors = {}

        if (!values.login) {
            errors.login = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }

        return errors
    };

    const validationSchema = yup.object({
        login: yup.string()
                        .email('Invalid email format')
                        .required('Required'),
        password: yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        //validate
    });

    //console.log('Formik errors ', formik.errors)
    //console.log('Formik touched ', formik.touched)

    return <form onSubmit={formik.handleSubmit}>
        <div className={s.formControl}>
            <input placeholder={"Login"}
                   name='login'
                   type={"email"}
                   {...formik.getFieldProps('login')}
                   // onBlur={formik.handleBlur}
                   // onChange={formik.handleChange}
                   // value={formik.values.login}
            />
        </div>
        {formik.touched.login && formik.errors.login ? <div className={s.error}> {formik.errors.login} </div> : null}

        <div className={s.formControl}>
            <input placeholder={"Password"}
                   name='password'
                   type={"password"}
                   {...formik.getFieldProps('password')}
            />
        </div>
        {formik.touched.password && formik.errors.password ? <div className={s.error}> {formik.errors.password} </div> : null}

        <div>
            <input type={"checkbox"}/>remember me
        </div>

        <div>
            <button type={"submit"}>LogIn</button>
        </div>
    </form>
}

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login