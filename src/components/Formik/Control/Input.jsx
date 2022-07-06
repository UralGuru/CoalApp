import React from 'react';
import s from './style.module.css'
import {Field, ErrorMessage} from "formik";


const Input = (props) => {
    const {label, name, ...rest} = props;
    return (
        <div className={s.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            {/*<ErrorMessage name={name} component={TextError}/>*/}
        </div>
    )
}

export default Input