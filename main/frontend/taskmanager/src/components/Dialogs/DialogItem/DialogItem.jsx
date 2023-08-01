import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={props.id.toString()} className={({isActive}) =>
                isActive ? s.active : ''
            }>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem