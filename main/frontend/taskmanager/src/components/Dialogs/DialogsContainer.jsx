import {
    sendMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import React from "react";
import {withAuthRedirect} from "../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        newMessageText: state.dialogPage.newMessageText,
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }

}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    /*withAuthRedirect*/
)(Dialogs)