import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.dialogPage.messagesData.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogPage.newMessageBody
    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.onNewMessageChange(body)
    }

    return (
        <div className={s.dialog}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
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