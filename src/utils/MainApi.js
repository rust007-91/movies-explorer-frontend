import { URL_MAIN } from '../utils/constants';

function MainApi() {
    const token = localStorage.getItem('tokenMovie');

    // Заголовок для базовый
    const headersBase = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    // Заголовок для Movie
    const headersMovie = {
        ...headersBase,
        Authorization: `Bearer ${token}`,
    };

    // Запрос для регистрации и авторизации с выодом ошибки с сервера
    const requestAuth = (url, option) => {
        return fetch(url, option).then((res) => {
            if (!res.ok) {
                return res.json().then((resErr) => {
                    throw new Error(resErr); // пробрасываем в блок catch объект ошибки
                });
            }
            return res.json();
        });
    };

    // Запрос для операций с фильмами
    const requestMovie = (url, options) => {
        return fetch(url, options).then((res) => {
            if (res) {
                return res.json();
            }
            throw new Error(`Что-то пошло не так: ${res.status}`);
        });
    };

    // Запрос на регистрацию
    const register = (name, email, password) => {
        return requestAuth(`${URL_MAIN}/signup`, {
            method: 'POST',
            headers: headersBase,
            body: JSON.stringify({ name, email, password }),
        });
    };

    // Запрос на авторизацию
    const login = (email, password) => {
        return requestAuth(`${URL_MAIN}/signin`, {
            method: 'POST',
            headers: headersBase,
            body: JSON.stringify({ email, password }),
        });
    };

    // Метод обновления информации о пользователе на сервере
    const setInfo = ({ name, email }) => {
        return requestAuth(`${URL_MAIN}/users/me`, {
            method: 'PATCH',
            headers: headersMovie,
            body: JSON.stringify({
                name: name,
                email: email,
            }),
        });
    };

    // Запрос информации по токену
    const checkToken = () => {
        return requestMovie(`${URL_MAIN}/users/me`, {
            method: 'GET',
            headers: headersMovie,
        });
    };

    // Запрос информации о пользователе
    // Метод запроса информации о пользователе с сервера
    const getInfo = () => {
        return requestMovie(`${URL_MAIN}/users/me`, {
            method: 'GET',
            headers: headersMovie,
        });
    };

    // Сохранение фильма в подборку
    // Метод обработки лайков на сервере
    const saveMovieCard = (card) => {
        return requestMovie(`${URL_MAIN}/movies`, {
            method: 'POST',
            headers: headersMovie,
            body: JSON.stringify({
                country: card.country,
                director: card.director,
                duration: card.duration,
                year: card.year,
                description: card.description,
                image: `https://api.nomoreparties.co${card.image.url}`,
                trailerLink: card.trailerLink,
                thumbnail: `https://api.nomoreparties.co${card.image.url}`, // card.image.formats.thumbnail.url
                movieId: card.id,
                nameRU: card.nameRU,
                nameEN: card.nameEN,
            }),
        });
    };

    // Удаление фильма из подборки
    const deleteMovieCard = (id) => {
        return requestMovie(`${URL_MAIN}/movies/${id}`, {
            method: 'DELETE',
            headers: headersMovie,
        });
    };

    // Возвращение сохранённых фильмов из подборки
    const getSavedMovieCard = () => {
        return requestMovie(`${URL_MAIN}/movies`, {
            method: 'GET',
            headers: headersMovie,
        });
    };

    return {
        register,
        login,
        checkToken,
        getInfo,
        setInfo,
        saveMovieCard,
        deleteMovieCard,
        getSavedMovieCard,
    };
}

export default MainApi;
