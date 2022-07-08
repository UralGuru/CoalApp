import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let getDialogs = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let getMessage = state.messages.map(m => <Message mes={m.mes} key={m.id}/>);
    let getNewMessage = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Navigate to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {getDialogs}
            </div>

            <div className={s.messages}>
                <div>{getMessage}</div>
                <textarea value={getNewMessage}
                          onChange={onNewMessageChange}
                          placeholder='Enter your message'>
                        </textarea>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;

//ctrl+alt+j - <*></*>