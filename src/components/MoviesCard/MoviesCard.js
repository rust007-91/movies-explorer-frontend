import { useEffect, useState } from "react";
import "./MoviesCard.css";
import { convertDuration } from "../../utils/convertDuration";

function MoviesCard({
                        card,
                        savedMoviesCards,
                        name,
                        duration,
                        trailer,
                        onCardSave,
                        onCardDel,
                    }) {
    const timeFilm = convertDuration(duration); // конвертируемая продолжительность фильма
    const [isLiked, setLiked] = useState(false); // хук установки лайка (сохранение карточки)
    const isMoviePath = location.pathname === "/movies"; // определяем путь

    const image = isMoviePath
        ? `https://api.nomoreparties.co${card.image.url}`
        : card.image;

    useEffect(() => {
        // Проверяем есть карточка отоброжаемого массива в массиве сохранённых и красим
        setLiked(savedMoviesCards.some((itemCard) => (card.movieId || card.id) === itemCard.movieId));
    }, [savedMoviesCards, card.id]);

    // Обработчик сохранения
    const handleCardClick = () => {
        if (isLiked) {
            onCardDel(card);
        } else {
            onCardSave(card);
        }
        setLiked(!isLiked); // Обновляем isLiked визуально
    };

    const buttonCard = isMoviePath ? (
        <button
            className={`elements__card-savebtn ${
                isLiked && "elements__card-savebtn_active"
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
            <li className="elements__card">
                <a href={trailer} className="elements__trailer-link" target="_blank">
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
