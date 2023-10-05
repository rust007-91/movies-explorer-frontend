import "./ProfileBtn.css";
import {Link} from "react-router-dom";
import icon_profile from "../../images/icon_profile.svg";

function ProfileBtn() {
    return(
        <button className={`profile-btn
                            ${location.pathname === '/movies' && "profile-btn_grey"}
                            ${location.pathname === '/saved-movies' && "profile-btn_grey"}
                            ${location.pathname === '/profile' && "profile-btn_grey"}`
        }>
            <Link to='/profile' className="profile-btn__link">Аккаунт</Link>
            <div className={`profile-btn__circle
                                ${location.pathname === '/movies' && "profile-btn__circle_grey"}
                                ${location.pathname === '/saved-movies' && "profile-btn__circle_grey"}
                                ${location.pathname === '/profile' && "profile-btn__circle_grey"}`
            }>
                <img className="profile-btn__icon" src={icon_profile} alt="иконка аккаунта"/>
            </div>
        </button>
    );
}

export default ProfileBtn