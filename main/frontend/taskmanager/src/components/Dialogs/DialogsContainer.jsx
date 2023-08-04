import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducerDialogs";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/reducerProfile";
import MyPosts from "../Profile/MyPosts/MyPosts";
import React from "react";


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogPage
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return (<Dialogs onNewMessageChange={onNewMessageChange}
                                     onSendMessageClick={onSendMessageClick}
                                     dialogPage={state}/>)
                }
            }
        </StoreContext.Consumer>
    );
}


export default DialogsContainer