import React from "react";
import s from "./Dialogs.module.css"

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialog">Ural</NavLink>
                </div>
                <div className={s.dialog}>Dimych</div>
                <div className={s.dialog}>Dunya</div>
                <div className={s.dialog}>Matvey</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are uoy</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;