import "./PopupMenu.css";
import {Link} from "react-router-dom";
import icon_profile from "../../images/icon_profile.svg";

function PopupMenu(props) {
    const {isOpen, onClose} = props;

    return(
        <div className={`menu ${isOpen && "menu_active"}`}>
            <div className="menu__block">
                <button
                    className="menu__close"
                    onClick={onClose}
                >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group ">
                            <rect id="text__COLOR:font-main" x="7.16064" y="9.28247" width="3" height="22" transform="rotate(-45 7.16064 9.28247)" fill="white"/>
                            <rect id="text__COLOR:font-main_2" x="22.7173" y="7.16113" width="3" height="22" transform="rotate(45 22.7173 7.16113)" fill="white"/>
                        </g>
                    </svg>
                </button>
                <nav className="menu__links">
                    <ul className="menu__list">
                        <li>
                            <Link to='/' className="menu__links-films">Главная</Link>
                        </li>
                        <li>
                            <Link to='/movies' className="menu__links-films">Фильмы</Link>
                        </li>
                        <li>
                            <Link to='/saved-movies' className="menu__links-films">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                </nav>

                <button className={`menu__profile-btn`}>
                    <Link to='/profile' className="menu__profile-link">Аккаунт</Link>
                    <div className={`menu__profile-circle`}>
                        <img className="menu__profile-icon" src={icon_profile} alt="иконка аккаунта"/>
                    </div>
                </button>


            </div>
            <div className="menu__overlay"></div>
        </div>
    );
}

export default PopupMenu;