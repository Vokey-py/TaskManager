import {
    sendMessageActionCreator,
} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import React from "react";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
    }

}

let mapDispatchToProps = (dispatch) => {
    return{
        onSendMessageClick: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        },
    }

}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    /*withAuthRedirect*/
)(Dialogs)