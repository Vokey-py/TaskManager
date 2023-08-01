import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Vasya'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'My name'},
    {id: 3, message: 'Is Ruslan'}
]

let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)
let messagesElements = messagesData.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs