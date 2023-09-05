import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import icon_profile from '../../images/icon_profile.svg';
import icon_burger from '../../images/icon_burger.svg';


function Header() {
    const [isLogedIn, setLogedIn] = useState(false); // хук установки авторизации
    return(
        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Логотип"/>

                {isLogedIn ?
                    (
                        <>
                            <div className="header__movies">
                                <Link to='/movies' className='header__films'>Фильмы</Link>
                                <Link to='/saved-movies' className='header__films'>Сохранённые фильмы</Link>
                            </div>

                            <div className="header__profile-btn">
                                <Link to='/profile' className="header__profile-link">Аккаунт</Link>
                                <div className="header__profile-circle">
                                    <img className="header__profile-icon" src={icon_profile} alt="иконка аккаунта"/>
                                </div>
                            </div>

                            <img src={icon_burger} alt="меню бургер" className="header__burger"/>
                        </>

                    ) :
                    (
                        <div className="header__auth">
                            <Link to='/signup' className="header__auth-link">Регистрация</Link>
                            <Link to='/signin' className="header__auth-link header__auth-link_active">Войти</Link>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default Header;