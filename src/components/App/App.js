import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import './App.css';
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import PopupMenu from "../PopupMenu/PopupMenu";

function App() {
    const [isBurgerOpen, setBurgerOpen] = useState(false); // хук открытия попапа меню

    // Блокировка фона при открытии меню
    useEffect(() => {
        if (isBurgerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isBurgerOpen]);

    const handleBurgerCLick = () => {
        setBurgerOpen(true);
    };

    const closePopupMenu = () => {
        setBurgerOpen(false);
    }

  return (
    <div className="page">
        <PopupMenu isOpen={isBurgerOpen} onClose={closePopupMenu} />
        <div className="page__container">

            <Routes>
                <Route path='/' element={<Layout onClick={handleBurgerCLick}/>}>
                    <Route index element={<Main />} />
                    <Route path='movies' element={<Movies />} />
                    <Route path='saved-movies' element={<SavedMovies />} />
                </Route>

                <Route path='/profile' element={<Profile />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/signin' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
