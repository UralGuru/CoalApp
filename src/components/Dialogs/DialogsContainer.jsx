import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let  onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>

}

export default DialogsContainer;

//ctrl+alt+j - <*></*>