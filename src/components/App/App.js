import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import './App.css';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupMenu from '../PopupMenu/PopupMenu';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentCardContext } from '../../contexts/CurrentCardContext';
import { CurrentSearchContext } from '../../contexts/CurrentSearchContext';
import { CurrentServerErrorsContext } from '../../contexts/CurrentServerErrorsContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem('allMovies')) || [],
    ); // хук записи данных карточек c сервера
    const [savedMovies, setSavedMovies] = useState(
        JSON.parse(localStorage.getItem('savedMovies')) || [],
    ); // хук записи сохранённых карточек
    const [valueSearch, setValueSearch] = useState(
        localStorage.getItem('searchText') || '',
    ); // значения в поле
    const [isShort, setIsShort] = useState(
        JSON.parse(localStorage.getItem('toggle')) || false,
    ); // хук переключения чекбокса
    const [isLoggedIn, setIsLoggedIn] = useState(false); // хук управления авторизацией
    const [currentUser, setCurrentUser] = useState({}); // хук установки пользователя
    const [isLoading, setLoading] = useState(false); // хук загрузки прелоадера
    const [isBurgerOpen, setBurgerOpen] = useState(false); // хук открытия попапа меню
    const [isInfoPopupOpen, setInfoPopupOpen] = useState(false); // хук для отображения уведомления
    const [isInfoStatus, setInfoStatus] = useState(false); // хук для отображения статус запроса
    const [isInfoText, setInfoText] = useState(''); // хук для отображения текста ошибки
    const [serverErrorText, setServerErrorText] = useState(''); // хук отображения ошибки от сервера

    const navigate = useNavigate(); // хук навигации
    const location = useLocation(); // хук отслеживания страниц

    const { getMoviesApi } = MoviesApi();
    const { register, login, checkToken, getInfo, setInfo } = MainApi();

    // Блокировка фона при открытии меню
    useEffect(() => {
        if (isBurgerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isBurgerOpen]);

    // Достаём сохарённый объект карточек из localStorage
    useEffect(() => {
        const token = localStorage.getItem('tokenMovie'); // получаем сохранённый токен
        // Проверка наличия токена
        if (token) {
            checkToken()
                .then(() => {
                    setIsLoggedIn(true); // авторизуем пользователя
                    navigate('/movies', { replace: true }); // перенаправлени на фильмы
                })
                .catch((err) => alert(err));
        }
    }, []);

    // Сброс ошибок сабмита форм при изменении маршрута
    useEffect(() => {
        setServerErrorText('');
    }, [location.pathname]); // Зависимость от pathname маршрута

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
            });
    };

    // Загрузка всех карточек "beatfilm-movies"
    const handleSearchAllMovies = () => {
        if (movies.length === 0) {
            setLoading(true); // прелоадер
            getMoviesApi()
                .then((data) => {
                    setMovies(data);
                    localStorage.setItem('allMovies', JSON.stringify(data));
                })
                .catch(() => {
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
    };

    // Обработчик регистрации
    const handleRegister = (formValue) => {
        const { name, email, password } = formValue;
        register(name, email, password)
            .then(() => {
                setInfoPopupOpen(true);
                setInfoStatus(true);
                setInfoText(`Вы успешно зарегистрировались`);
                handleLogin(formValue); // обработчик авторизации
            })
            .catch((err) => {
                setServerErrorText(err.message); // устанавливаем текст ошибки от сервера
            });
    };

    // Обработчик авторизации
    const handleLogin = (formValue) => {
        const { email, password } = formValue;
        // запрос на авторазицию и получение токена
        login(email, password)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('tokenMovie', data.token); // сохранение токена
                    setIsLoggedIn(true); // авторизуем пользователя
                    navigate('/movies', { replace: true }); // перенаправлени на фильмы
                }
            })
            .catch((err) => {
                setServerErrorText(err.message); // устанавливаем текст ошибки от сервера
            });
    };

    // Обработчик бургера
    const handleBurgerCLick = () => {
        setBurgerOpen(true);
    };

    // Обработчик попапов
    const closeAllPopups = () => {
        setBurgerOpen(false);
        setInfoPopupOpen(false);
    };

    // Обработчик кнопки выйти
    const handleSignOut = () => {
        // удаляем сохранённые данные
        localStorage.clear();
        setIsLoggedIn(false);
        navigate('/', { replace: true });
    };

    return (
        <div className="page">
            <PopupMenu isOpen={isBurgerOpen} onClose={closeAllPopups} />
            <div className="page__container">
                <CurrentCardContext.Provider
                    value={{ movies, savedMovies, setSavedMovies }}
                >
                    <CurrentSearchContext.Provider
                        value={{
                            valueSearch,
                            setValueSearch,
                            isShort,
                            setIsShort,
                        }}
                    >
                        <CurrentServerErrorsContext.Provider
                            value={serverErrorText}
                        >
                            <CurrentUserContext.Provider value={currentUser}>
                                <Routes>
                                    <Route
                                        path="/signup"
                                        element={
                                            <Register
                                                onSubmit={handleRegister}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/signin"
                                        element={
                                            <Login onSubmit={handleLogin} />
                                        }
                                    />
                                    <Route
                                        path="/"
                                        element={
                                            <Layout
                                                onClick={handleBurgerCLick}
                                                loggedIn={isLoggedIn}
                                            />
                                        }
                                    >
                                        <Route index element={<Main />} />

                                        <Route
                                            path="movies"
                                            element={
                                                <ProtectedRoute
                                                    loggedIn={isLoggedIn}
                                                    element={Movies}
                                                    loading={isLoading}
                                                    onSubmit={
                                                        handleSearchAllMovies
                                                    }
                                                />
                                            }
                                        />

                                        <Route
                                            path="saved-movies"
                                            element={
                                                <ProtectedRoute
                                                    loggedIn={isLoggedIn}
                                                    element={SavedMovies}
                                                    onSubmit={
                                                        handleSearchAllMovies
                                                    }
                                                />
                                            }
                                        />
                                        <Route
                                            path="profile"
                                            element={
                                                <ProtectedRoute
                                                    loggedIn={isLoggedIn}
                                                    element={Profile}
                                                    onSubmit={handleProfile}
                                                    logOut={handleSignOut}
                                                />
                                            }
                                        />
                                    </Route>
                                    <Route
                                        path="*"
                                        element={<PageNotFound />}
                                    />
                                </Routes>
                            </CurrentUserContext.Provider>
                        </CurrentServerErrorsContext.Provider>
                    </CurrentSearchContext.Provider>
                </CurrentCardContext.Provider>

                <InfoTooltip
                    title={isInfoText}
                    name={'moviesAlert'}
                    isOpen={isInfoPopupOpen}
                    onClose={closeAllPopups}
                    status={isInfoStatus}
                />
            </div>
        </div>
    );
}

export default App;
