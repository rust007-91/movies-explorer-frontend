import {useEffect, useState} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
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
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import {CurrentCardContext} from "../../contexts/CurrentCardContext";
import {CurrenPreloaderContext} from "../../contexts/CurrenPreloaderContext";
import {CurrentBtnMoreContext} from "../../contexts/CurrentBtnMoreContext";
import {CurrentValueSearchContext} from "../../contexts/CurrentValueSearchContext";
import {CurrentServerErrorsContext} from "../../contexts/CurrentServerErrorsContext";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import useSearchForm from "../../utils/hooks/useSearchForm";

function App() {
    const [isBurgerOpen, setBurgerOpen] = useState(false); // хук открытия попапа меню
    const [cards, setCards] = useState([]); // хук записи данных карточек
    const [savedMoviesCards, setSavedMoviesCards] = useState([]); // хук записи данных сохранённых карточек
    const [isLoading, setLoading] = useState(false); // хук загрузки прелоадера
    const [isBtnMore, setBtnMore] = useState(false); // хук загрузки кнопки "Ещё"
    const [isInfoPopupOpen, setInfoPopupOpen] = useState(false); // хук для отображения уведомления
    const [isInfoStatus, setInfoStatus] = useState(false); // хук для отображения статус запроса
    const [isInfoText, setInfoText] = useState(""); // хук для отображения текста ошибки
    const [valueSearch, setValueSearch] = useState(""); // значения в поле
    const [isChecked, setIsChecked] = useState(false); // хук переключения чекбокса
    const [isLoggedIn, setIsLoggedIn] = useState(false); // хук управления авторизацией
    const [serverErrorText, setServerErrorText] = useState(""); // хук отображения ошибки от сервера
    const [currentUser, setCurrentUser] = useState({}); // хук установки пользователя

    const [savedCards, setSavedCards] = useState([]); // хук записи сохранённых карточек

    const navigate = useNavigate(); // хук навигации
    const location = useLocation(); // хук отслеживания страниц

    const {getMoviesApi} = MoviesApi();
    const {register, login, checkToken, getInfo, setInfo, saveMovieCard, deleteMovieCard, getSavedMovieCard} = MainApi();
    const {filterSearch, filterCheckBox} = useSearchForm(); // хук поиска по строке

    // Блокировка фона при открытии меню
    useEffect(() => {
        if (isBurgerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [isBurgerOpen]);

    // Достаём сохарённый объект карточек из localStorage
    useEffect(() => {
        handleLocalCard();
    },[]);

    // Сброс ошибок сабмита форм при изменении маршрута
    useEffect(() => {
        setServerErrorText('');
    }, [location.pathname]); // Зависимость от pathname маршрута

    // Обработчик проверки карточек, текста, чекбокса в localStorage
    const handleLocalCard = () => {
        const allMovies = JSON.parse(localStorage.getItem('allMovies')); // получаем сохранённый объект
        const searchText = localStorage.getItem('searchText'); // получаем сохранённый текст запроса
        const toggle = JSON.parse(localStorage.getItem("toggle")); // получаем сохранённый статус чекбокса
        const token = localStorage.getItem('tokenMovie'); // получаем сохранённый токен
        const savedCardsArray = JSON.parse(localStorage.getItem('savedMovies')) || []; // получаем сохранённый массив фильмов
        const likeMovies = JSON.parse(localStorage.getItem('likeMovies')) || []; // получаем сохранённый объект

        // Установка сохранённых фильмов после перезагруки
        setSavedMoviesCards(savedCardsArray);

        // Установка карточек и кнопки после перезагруки
        if (allMovies) {
            setCards(allMovies);

            setBtnMore(true);
        }
        // Установка значения текста в поисковой строке после перезагрузки
        if (searchText) {
            setValueSearch(searchText);
        }
        // Установка значения чекбокса после перезагрузки
        if (toggle) {
            setIsChecked(toggle);
        }
        // Проверка наличия токена
        if (token) {
            checkToken(token)
                .then((data) => {
                    setIsLoggedIn(true); // авторизуем пользователя
                    navigate('/movies', {replace: true}); // перенаправлени на фильмы
                })
                .catch((err) => alert(err));
        }

        return;
    }

    // Управление записью данных профиля
    useEffect(() => {
        if (isLoggedIn) {
            getInfo()
                .then((data) => {
                    setCurrentUser(data); // запись данных профиля в стэйт
                })
                .catch((err) => alert(err));
        }
    }, [isLoggedIn]);

    // Редактирование данных в профиле
    const handleProfile = (values) => {
        setInfo(values)
            .then((data) => {
                setCurrentUser(data); // запись данных профиля в стэйт
                setInfoPopupOpen(true);
                setInfoStatus(true);
                setInfoText(`Вы успешно Обновили данные`);
            })
            .catch((err) => {
                setServerErrorText(err.message); // устанавливаем текст ошибки от сервера
            })
    }

    // Загрузка всех карточек beatfilm-movies
    const handleSearchAllMovies = () => {
        localStorage.setItem("searchText", valueSearch); // запись запроса в лс
        const allMovies = JSON.parse(localStorage.getItem('allMovies')); // получаем сохранённый объект
        if(allMovies) {
            // Применяем фильтрацию на основе состояния чекбокса
            const filteredCards = isChecked ? filterCheckBox(cards) : cards;
            // Применяем фильтрацию по тексту на уже отфильтрованных фильмах
            const filteredAndSearchedCards = filterSearch(filteredCards, valueSearch);
            setCards(filteredAndSearchedCards);
        } else {
            setLoading(true);
            getMoviesApi()
                .then((data) => {
                    setCards(data);
                    setBtnMore(true);
                    localStorage.setItem('allMovies', JSON.stringify(data));
                })
                .catch((err) => {
                    setInfoPopupOpen(true);
                    setInfoStatus(false);
                    setInfoText(`Во время запроса произошла ошибка. 
                            Возможно, проблема с соединением или сервер недоступен. 
                            Подождите немного и попробуйте ещё раз.`);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    // Обработчик чекбокса короткометражек
    const handleCheckboxAllMovies = () => {
        setIsChecked(!isChecked); // переключаем визуально
        localStorage.setItem("toggle", JSON.stringify(!isChecked)); // устанавливаем состояние в localStorage
    }


    useEffect(() => {
        getSavedMovieCard()
            .then((data) => {
                setSavedMoviesCards(data);
                localStorage.setItem('savedMovies', JSON.stringify(data));
            })
            .catch((err) => alert(err))
    }, [savedCards]);


    // Загрузка карточек сохранённых
    const handleSearchSavedMovies = () => {
        // Применяем фильтрацию на основе состояния чекбокса
        const filteredCards = isChecked ? filterCheckBox(cards) : cards;
        // Применяем фильтрацию по тексту на уже отфильтрованных фильмах
        const filteredAndSearchedCards = filterSearch(filteredCards, valueSearch);
        setCards(filteredAndSearchedCards);
    }

    // Обработчик чекбокса короткометражек
    const handleCheckboxSavedMovies = () => {
        setIsChecked(!isChecked); // переключаем визуально
    }

    // Обработчик регистрации
    const handleRegister = (formValue) => {
        const {name, email, password} = formValue;
        register(name, email, password)
            .then((data) => {
                setInfoPopupOpen(true);
                setInfoStatus(true);
                setInfoText(`Вы успешно зарегистрировались`);
                handleLogin(formValue); // обработчик авторизации
            })
            .catch((err) => {
                setServerErrorText(err.message); // устанавливаем текст ошибки от сервера
            })
    }

    // Обработчик авторизации
    const handleLogin = (formValue) => {
        const {email, password} = formValue;
        // запрос на авторазицию и получение токена
        login(email, password)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('tokenMovie', data.token); // сохранение токена
                    setIsLoggedIn(true); // авторизуем пользователя
                    navigate('/movies', {replace: true}); // перенаправлени на фильмы
                }
            })
            .catch((err) => {
                setServerErrorText(err.message); // устанавливаем текст ошибки от сервера
            })
    }

    // Обрабтчик сохранения карты
    const handleCardSave = (card) => {
        saveMovieCard(card)
            .then((newCard) => {
                setSavedCards([...savedCards, newCard]);
            })
            .catch((err) => alert(err));
    }

    // Обрабтчик удаления карты из сохранённых
    const handleCardRemove = (card) => {
        // ищем сохранённую карту с _id
        const itemToRemove = savedMoviesCards.find((item) => item.movieId === card.id);

        if (itemToRemove) {
            return deleteMovieCard(itemToRemove._id)
                .then(() => {
                    const stateSavedCards = savedMoviesCards.filter((c) => c._id !== itemToRemove._id);
                    setSavedMoviesCards(stateSavedCards);

                    localStorage.setItem('savedMovies', JSON.stringify(stateSavedCards));
                })
                .catch((err) => alert(err));
        }
    }

    // Обработчик бургера
    const handleBurgerCLick = () => {
        setBurgerOpen(true);
    };

    // Обработчик попапов
    const closeAllPopups = () => {
        setBurgerOpen(false);
        setInfoPopupOpen(false);
    }

    // Обработчик кнопки выйти
    const handleSignOut = () => {
        // удаляем сохранённые данные
        localStorage.removeItem('data');
        localStorage.removeItem('searchText');
        localStorage.removeItem("toggle");
        localStorage.removeItem('tokenMovie');
        setIsLoggedIn(false);
        navigate('/', {replace:true});
    }

  return (
    <div className="page">
        <PopupMenu isOpen={isBurgerOpen} onClose={closeAllPopups} />
        <div className="page__container">
            <CurrentCardContext.Provider value={{cards, savedMoviesCards}}>
                <CurrenPreloaderContext.Provider value={isLoading}>
                    <CurrentBtnMoreContext.Provider value={{isBtnMore, setBtnMore}}>
                        <CurrentValueSearchContext.Provider value={{valueSearch, setValueSearch, isChecked, setIsChecked}}>
                           <CurrentServerErrorsContext.Provider value={serverErrorText}>
                               <CurrentUserContext.Provider value={currentUser}>
                                   <Routes>
                                       <Route path='/' element={<Layout onClick={handleBurgerCLick} loggedIn={isLoggedIn}/>}>
                                           <Route index element={<Main />} />
                                           <Route path='movies' element={<Movies
                                               onSubmit={handleSearchAllMovies}
                                               onChange={handleCheckboxAllMovies}
                                               onCardSave={handleCardSave}
                                               onCardDel={handleCardRemove}
                                               savedCards={savedMoviesCards}/>}
                                           />
                                           <Route path='saved-movies' element={<SavedMovies
                                               onSubmit={handleSearchSavedMovies}
                                               onChange={handleCheckboxSavedMovies}
                                               onCardSave={handleCardSave}
                                               onCardDel={handleCardRemove}/>}
                                           />
                                           <Route path='/profile' element={<Profile onSubmit={handleProfile} logOut={handleSignOut}/>} />
                                       </Route>
                                       <Route path='/signup' element={<Register onSubmit={handleRegister}/>} />
                                       <Route path='/signin' element={<Login onSubmit={handleLogin}/>} />
                                       <Route path='*' element={<PageNotFound />} />
                                   </Routes>
                               </CurrentUserContext.Provider>
                           </CurrentServerErrorsContext.Provider>
                        </CurrentValueSearchContext.Provider>
                    </CurrentBtnMoreContext.Provider>
                </CurrenPreloaderContext.Provider>
            </CurrentCardContext.Provider>

            <InfoTooltip
                title={isInfoText}
                name={"moviesAlert"}
                isOpen={isInfoPopupOpen}
                onClose={closeAllPopups}
                status={isInfoStatus}
            />
        </div>
    </div>
  );
}

export default App;
