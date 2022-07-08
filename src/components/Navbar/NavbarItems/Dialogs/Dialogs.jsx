import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage, useFormik} from "formik";


const DialogsForm = (props) => {
    props = props.props;

    let getNewMessage = props.dialogsPage.newMessageBody;
    let onSendMessageClick = () => { props.sendMessage()};
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return <form onSubmit={formik.handleSubmit}>
        <div>
                    <textarea value={getNewMessage}
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'>
                    </textarea>
        </div>
        <div>
            <button onClick={onSendMessageClick}>Send</button>
        </div>
    </form>
}

const AddMessageForm = () => {
    return <Formik>
        {
            formik => {
                return <Form>
                        {/*<Field as={'textarea'} placeholder='Enter your message' name='textarea' type={"login"}/>*/}
                    <Field as="textarea" id="description" name="description"></Field>
                </Form>
            }
        }
    </Formik>
}
const Dialogs = (props) => {

    let state = props.dialogsPage;

    let getDialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let getMessage = state.messages.map(m => <Message mes={m.mes} key={m.id}/>);
    let getNewMessage = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let  onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {getDialogs}
            </div>

            <div className={s.messages}>
                <div>{getMessage}</div>
                <AddMessageForm />
            </div>
        </div>
    );
}

export default Dialogs;

//ctrl+alt+j - <*></*>