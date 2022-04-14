import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().messagePage;

    let getDialogs = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let getMessage = state.messages.map(m => <Message mes={m.mes}/>);
    let getNewMessage = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let  onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {getDialogs}
            </div>

            <div className={s.messages}>
                <div>{getMessage}</div>
                <div>
                    <div><textarea value={getNewMessage}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

//ctrl+alt+j - <*></*>