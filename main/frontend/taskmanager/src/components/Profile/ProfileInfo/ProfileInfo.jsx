import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader/>
    return (
        <div>
            <div className={s.descriptionBlock}>
                ava + Description
                <ProfileStatusContainer status={props.status} updateStatus={props.updateStatus}/>
                <img src={props.profile.photos.large}/>
            </div>
            <div>{props.profile.fullName}</div>
        </div>
    );
}

export default ProfileInfo