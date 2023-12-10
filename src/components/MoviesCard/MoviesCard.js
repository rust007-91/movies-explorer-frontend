import { useContext, useEffect, useState } from 'react';
import './MoviesCard.css';
import { convertDuration } from '../../utils/convertDuration';
import { CurrentCardContext } from '../../contexts/CurrentCardContext';
import MainApi from '../../utils/MainApi';

function MoviesCard({
    currentCard,
    name,
    duration,
    trailer,
    savedMovies,
    isSaved,
}) {
    const { setSavedMovies } = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const timeFilm = convertDuration(duration); // конвертируемая продолжительность фильма
    const isMoviePath = location.pathname === '/movies'; // определяем путь
    const { saveMovieCard, deleteMovieCard } = MainApi();

    const image = isMoviePath
        ? `https://api.nomoreparties.co${currentCard.image.url}`
        : currentCard.image;

    // Обработчик сохранения карты
    const handleCardSave = (card) => {
        saveMovieCard(card)
            .then((newCard) => {
                // Добавляем свойство isSaved к новой карточке
                const updatedCard = { ...newCard, isSaved: true };
                // расширяем массив и записываем в стэйт и ls
                const savedList = [...savedMovies, updatedCard];
                setSavedMovies(savedList);
                localStorage.setItem('savedMovies', JSON.stringify(savedList));
            })
            .catch((err) => alert(err));
    };

    // Обрабтчик удаления карты из сохранённых
    const handleCardRemove = (card) => {
        // ищем сохранённую карту с id
        const itemToRemove = savedMovies.find(
            (item) => (card.movieId || card.id) === item.movieId,
        );

        deleteMovieCard(itemToRemove._id)
            .then(() => {
                // исключаем удалённую карточку из сохранённого массива
                const state = savedMovies.filter(
                    (item) =>
                        item.movieId !==
                        (itemToRemove.id || itemToRemove.movieId),
                );
                setSavedMovies(state);
                localStorage.setItem('savedMovies', JSON.stringify(state));
            })
            .catch((err) => alert(err));
    };

    // Обработчик сохранения
    const handleCardClick = () => {
        if (isSaved) {
            handleCardRemove(currentCard);
        } else {
            handleCardSave(currentCard);
        }
    };

    const buttonCard = isMoviePath ? (
        <button
            className={`elements__card-savebtn ${
                isSaved && 'elements__card-savebtn_active'
            }`}
            type="button"
            onClick={handleCardClick}
        ></button>
    ) : (
        <button
            className="elements__card-delbtn"
            type="button"
            onClick={handleCardClick}
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99951 8.94287L10.3566 11.2999L11.4172 10.2393L9.06017 7.88221L11.2994 5.64295L10.2388 4.58229L7.99951 6.82155L5.76037 4.58241L4.69971 5.64307L6.93885 7.88221L4.58192 10.2391L5.64258 11.2998L7.99951 8.94287Z"
                    fill="white"
                />
            </svg>
        </button>
    );

    return (
        <>
            <li className={`elements__card ${isSaved && "elements__card_active"}`}>
                <a
                    href={trailer}
                    className="elements__trailer-link"
                    target="_blank"
                >
                    <img
                        src={image}
                        alt="обложка фильма"
                        className="elements__card-image"
                    />
                </a>
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">{name}</h2>
                        <div className="elements__card-time">{timeFilm}</div>
                    </div>
                    {buttonCard}
                </div>
            </li>
        </>
    );
}

export default MoviesCard;
