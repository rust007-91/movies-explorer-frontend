import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useContext, useRef} from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import {CurrentCardContext} from "../../contexts/CurrentCardContext";
import {CurrentValueSearchContext} from "../../contexts/CurrentValueSearchContext";
import useSearchForm from "../../utils/hooks/useSearchForm";
import savedMovies from "../SavedMovies/SavedMovies";
import {useLocation} from "react-router-dom";

function MoviesCardList({onCardSave, onCardDel, savedCards}) {
    const {cards, savedMoviesCards} = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const {valueSearch, isChecked} = useContext(CurrentValueSearchContext);

    const location = useLocation();

    const currentCards = location.pathname === '/movies' ? cards : savedMoviesCards;

    const cardListRef = useRef(); // записываем объект, возвращаемый хуком, в переменную и получаем доступ к элементам
    // const {filterSearch, filterCheckBox} = useSearchForm(); // хук поиска по строке
    //
    // // Применяем фильтрацию на основе состояния чекбокса
    // const filteredCards = isChecked ? filterCheckBox(currentCards) : currentCards;

    // // Применяем фильтрацию по тексту на уже отфильтрованных фильмах
    // const filteredAndSearchedCards = filterSearch(filteredCards, valueSearch);

    return (
        <section className="elements">
            <div className="elements__container">
                {currentCards.length === 0 ?
                    (<h2 className='elements__search-text'>Ничего не найдено</h2>)
                    : (
                        <>
                            <ul className="elements__card-list" ref={cardListRef}>
                                {
                                    currentCards.map((card) => {
                                        return (
                                            <MoviesCard
                                                key={card.id || card.movieId}
                                                card={card}
                                                savedCards={savedCards}
                                                name={card.nameRU}
                                                duration={card.duration}
                                                trailer={card.trailerLink}
                                                onCardSave={onCardSave}
                                                onCardDel={onCardDel}
                                            />
                                        );
                                    })
                                }
                            </ul>
                            <ButtonShowMore cardListRef={cardListRef}/>
                        </>
                    )
                }
            </div>
        </section>
    );
}

export default MoviesCardList;