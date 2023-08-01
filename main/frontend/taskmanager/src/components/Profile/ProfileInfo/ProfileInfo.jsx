import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://webcomplex.com.ua/wp-content/uploads/2014/11/slider.png' alt='pictures'/>
            <div className={s.descriptionBlock}>
                ava + Description
            </div>
        </div>
    );
}

export default ProfileInfo