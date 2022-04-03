import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs;
    let messages = props.state.messages;

    let getDialogs = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let getMessage = messages.map(m => <Message mes={m.mes}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { getDialogs }
            </div>
            <div className={s.messages}>
                { getMessage }
            </div>
        </div>
    );
}

export default Dialogs;