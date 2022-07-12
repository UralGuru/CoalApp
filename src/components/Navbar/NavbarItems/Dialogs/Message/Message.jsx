import React from "react";
import s from "../Dialogs.module.css";

const Message = ({mes}) => {
    return (
        <div className={s.message}>
            {mes}
        </div>)
};

export default Message;