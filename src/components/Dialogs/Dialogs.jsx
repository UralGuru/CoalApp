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

    let dialogsData = [
        {id: 1, name: 'Marins'},
        {id: 2, name: 'Ural'},
        {id: 3, name: 'Danya'},
        {id: 4, name: 'Matvey'},
        {id: 5, name: 'Rustic'},
        {id: 6, name: 'Vova'}];
    let messages = [
        {id: 1, mes: "How a u, my hommy?"},
        {id: 2, mes: "Hi"},
        {id: 3, mes: "Go buxaty"},
        {id: 4, mes: "Yo"}];

    let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);
    let getMessage = messages.map(m => <Message mes={m.mes}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { getMessage }
            </div>
        </div>
    );
}

export default Dialogs;