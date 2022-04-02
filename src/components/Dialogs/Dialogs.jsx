import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (<div className={s.message}>{props.mes}</div>)
};


const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Marina" id="marina" />
                <DialogItem name="Ural" id="ural" />
                <DialogItem name="Danya" id="danya" />
                <DialogItem name="Matvey" id="matvey" />
                <DialogItem name="Rustic" id="rustic" />
                <DialogItem name="Vova" id="vova" />
            </div>
            <div className={s.messages}>
                <Message mes='Hello, my dear friend!' />
                <Message mes='Hi' />
                <Message mes='How a u?' />
                <Message mes='Yo' />
            </div>
        </div>
    );
}

export default Dialogs;