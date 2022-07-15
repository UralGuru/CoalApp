import {React, useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import s from "./ProfileInfo.module.css";


const ProfileDataForm = ({profile, onSave}) => {
    const onSubmit = (values) => {
        onSave(values)
    }

    return <Formik initialValues={profile} onSubmit={onSubmit}>
        {

            formik => {

                return <Form>
                    <div>
                        <b>Name: </b><Field  name='fullName' type={"text"}/>
                    </div>
                    <div>
                        <b>Looking for a fob: </b><Field type="checkbox" name="lookingForAJob" />{`${formik.values.lookingForAJob}`}
                    </div>
                    <div>
                        {formik.values.lookingForAJob &&
                        <div>
                            <b>My professional skills: </b>
                            <Field as="textarea" name='lookingForAJobDescription'/>
                        </div>
                        }
                    </div>
                    <div>
                        <b>About me: </b><Field name='aboutMe' type={"text"}/>
                    </div>

                    <div>
                        <b>Contacts: </b> {Object.keys(profile.contacts).map(key =>{
                        return <div key={key} className={s.contactInems}>
                            <i>{key}: <Field name={'contacts.'+key} type={"text"}/></i>
                            <ErrorMessage name={'contacts.'+key}>
                                {e => <div className={s.error}>{e}</div>}
                            </ErrorMessage>
                        </div>
                    })}
                    </div>
                    <div>
                        <button type={"submit"}>Save</button>
                    </div>
                </Form>
            }
        }
    </Formik>
};


export default ProfileDataForm