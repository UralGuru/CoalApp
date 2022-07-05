import React from 'react';
import {Formik, Form} from "formik";
import * as yup from 'yup';
import formikContainer from "./formikContainer";
import FormikControl from "./formikControl";

const FormikContainer = () => {
    const initialValues = {
        email: ''
    };
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required')
    });
    const onSubmit = values =>  console.log('Form data', values);


    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => <Form>
                    <FormikControl control='input' type='email' label='Email' name='email' />
                    <button type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer