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
    let dialogsElements = [
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>,
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>,
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>,
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>,
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>,
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
    ]

    let message = [
        {id: 1, mes: "How a u, my hommy?"},
        {id: 2, mes: "Hi"},
        {id: 3, mes: "Go buxaty"},
        {id: 4, mes: "Yo"}]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Message mes={message[0].mes}/>
                <Message mes={message[1].mes}/>
                <Message mes={message[2].mes}/>
                <Message mes={message[3].mes}/>
            </div>
        </div>
    );
}

export default Dialogs;