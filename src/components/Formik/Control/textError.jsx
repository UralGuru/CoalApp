import React from 'react';
import s from './style.module.css'
import {Field, ErrorMessage} from "formik";


const TextError = (props) => {
    return (
        <div className={s.error}>
            {props.children}
        </div>
    )
}

export default TextError