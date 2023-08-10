import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader/>
    return (
        <div>
            <img src='https://webcomplex.com.ua/wp-content/uploads/2014/11/slider.png' alt='pictures'/>
            <div className={s.descriptionBlock}>
                ava + Description
                <img src={props.profile.photos.large}/>
            </div>
            <div>{props.profile.fullName}</div>
        </div>
    );
}

export default ProfileInfo