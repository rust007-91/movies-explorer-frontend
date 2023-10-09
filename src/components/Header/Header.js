import { useEffect, useState } from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import Navigation from "../Navigation/Navigation";


function Header(props) {
    const {onClick} = props;

    const [isLogedIn, setLogedIn] = useState(true); // хук установки авторизации
    const location = useLocation(); // хук вычисления страницы

    return(
        <header className={`header 
        ${location.pathname === '/movies' && "header__location_active"} 
        ${location.pathname === '/saved-movies' && "header__location_active"}
        ${location.pathname === '/profile' && "header__location_active"}`
        }>
            <div className="header__container">
                <Link to='/' className='header__logo-link'>
                    <img className="header__logo" src={logo} alt="Логотип"/>
                </Link>
                {isLogedIn ?
                    (
                        <>
                            <Navigation />
                            <ProfileBtn />
                            <BurgerMenu onClick={onClick} />
                        </>
                    ) :
                    (
                        <nav className="header__auth">
                            <Link to='/signup' className="header__auth-link">Регистрация</Link>
                            <Link to='/signin' className="header__auth-link header__auth-link_active">Войти</Link>
                        </nav>
                    )
                }
            </div>
        </header>
    );
}

export default Header;