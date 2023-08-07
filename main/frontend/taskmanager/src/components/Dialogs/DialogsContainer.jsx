import {
    sendMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return{
        dialogsData: state.dialogPage.dialogsData,
        messagesData: state.dialogPage.messagesData,
        newMessageText: state.dialogPage.newMessageText
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer