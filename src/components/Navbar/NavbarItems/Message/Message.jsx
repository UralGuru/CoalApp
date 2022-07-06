import React from "react";
import s from "../Dialogs/Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.mes}
        </div>)
};

export default Message;