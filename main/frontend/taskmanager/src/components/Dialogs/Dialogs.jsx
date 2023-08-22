import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import ReduxDialogForm from "./DialohsForm";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messagesData.map(m => <Message message={m.message}/>)

    let addNewMessage = (values) => {
        props.onSendMessageClick(values.newMessageText)
    }

    if (props.isAuth === false) return <Navigate to="/login"/>

    return (
        <div className={s.dialog}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <ReduxDialogForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )

}

export default Dialogs