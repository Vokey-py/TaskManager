import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem id={d.id}  name={d.name}/>)
    let messagesElements = props.messagesData.map(m => <Message message={m.message} />)
    let newMessageText = props.newMessageText
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.onNewMessageChange(text)
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
                    <div><textarea value={newMessageText}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs