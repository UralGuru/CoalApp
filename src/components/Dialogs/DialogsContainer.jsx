import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirec} from "../../hoc/withAuthRedirec";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: () => {dispatch(sendMessageCreator())},
    }
}

let AuthRedirectComponent = withAuthRedirec(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

//ctrl+alt+j - <*></*>

