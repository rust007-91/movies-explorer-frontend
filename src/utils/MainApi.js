import {useState} from "react";

const URL_MAIN = 'https://api.movies-rotkin.nomoredomainsicu.ru';

function MainApi () {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const requestAuth = (url, option) => {
        return fetch(url, option)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then((resErr) => Promise.reject(resErr)); // пробрасываем в блок catch объект ошибки
                }
                return res.json();
            })
            .catch((err) => {
                throw err; // Проброс ошибки для дальнейшей обработки в handleRegister
            });
    }

    // Запрос на регистрацию
    const register = (name, email, password) => {
        return requestAuth(`${URL_MAIN}/signup`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({name, email, password})
        })
    }

    // Запрос на авторизацию
    const login = (email, password) => {
        return requestAuth(`${URL_MAIN}/signin`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({email, password})
        })
    }

    // Запрос информации по токену
    const checkToken = (token) => {
        return fetch(`${URL_MAIN}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => {
                if (res) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`)
            })
    }

    // Запрос информации о пользователе
    // Метод запроса информации о пользователе с сервера
   const getInfo = () => {
        return fetch (`${URL_MAIN}/users/me`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('tokenMovie')}`,
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
   }

    // Метод обновления информации о пользователе на сервере
    const setInfo = ({ name, email }) => {
        return requestAuth(`${URL_MAIN}/users/me`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('tokenMovie')}`,
            },
            body: JSON.stringify({
                name: name,
                email: email,
            }),
        })
    }

    // Сохранение фильма в подборку
    // Метод обработки лайков на сервере
    const saveMovieCard = (card) => {
        return fetch(`${URL_MAIN}/movies`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('tokenMovie')}`,
            },
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
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    // Удаление фильма из подборки
    const deleteMovieCard = (id) => {
        return fetch(`${URL_MAIN}/movies/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('tokenMovie')}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }

    // Возвращение сохранённых фильмов из подборки
    const getSavedMovieCard = () => {
        return fetch(`${URL_MAIN}/movies`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('tokenMovie')}`,
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }


    return {register, login, checkToken, getInfo, setInfo, saveMovieCard, deleteMovieCard, getSavedMovieCard};

}

export default MainApi;