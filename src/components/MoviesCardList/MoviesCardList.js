import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useContext, useEffect, useRef, useState } from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import { CurrentCardContext } from "../../contexts/CurrentCardContext";
import { CurrentValueSearchContext } from "../../contexts/CurrentValueSearchContext";
import useSearchForm from "../../utils/hooks/useSearchForm";
import { useLocation } from "react-router-dom";

function MoviesCardList({ onCardSave, onCardDel }) {
    const { cards, setCards, savedMoviesCards } = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const { valueSearch, isShort } = useContext(CurrentValueSearchContext);
    const { filterSearch, filterCheckBox } = useSearchForm(); // хук поиска по строке
    const location = useLocation(); // хук определения страницы
    const cardListRef = useRef(); // записываем объект, возвращаемый хуком, в переменную и получаем доступ к элементам
    const [isSearchExecuted, setIsSearchExecuted] = useState(false); // хук отслеживания произведен ли поиск

    // Определяем какой массив карт применять в зависимости от страницы
    const currentCards = location.pathname === "/movies" ? cards : savedMoviesCards;
    // Применяем фильтрацию на основе состояния чекбокса
    const filteredShortCards = isShort
        ? filterCheckBox(currentCards)
        : currentCards;
    // Применяем фильтрацию по тексту
    const filteredAndSearchedCards = filterSearch(
        filteredShortCards,
        valueSearch
    );

    // Индикатор поиска
    useEffect(() => {
        if (filteredAndSearchedCards.length > 0) {
            setIsSearchExecuted(true);
        }
    }, [filteredAndSearchedCards]);

    return (
        <section className="elements">
            <div className="elements__container">
                {isSearchExecuted && filteredAndSearchedCards.length === 0 ? (
                    <h2 className="elements__search-text">Ничего не найдено</h2>
                ) : (
                    <>
                        <ul className="elements__card-list" ref={cardListRef}>
                            {filteredAndSearchedCards.map((card) => {
                                return (
                                    <MoviesCard
                                        key={card.id || card.movieId}
                                        card={card}
                                        savedMoviesCards={savedMoviesCards}
                                        name={card.nameRU}
                                        duration={card.duration}
                                        trailer={card.trailerLink}
                                        onCardSave={onCardSave}
                                        onCardDel={onCardDel}
                                    />
                                );
                            })}
                        </ul>
                        <ButtonShowMore cardListRef={cardListRef} />
                    </>
                )}
            </div>
        </section>
    );
}

export default MoviesCardList;
