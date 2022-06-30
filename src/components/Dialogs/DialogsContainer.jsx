import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthRedirec} from "../../hoc/withAuthRedirec";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirec,
)(Dialogs);

//ctrl+alt+j - <*></*>

