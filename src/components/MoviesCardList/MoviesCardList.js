import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useContext, useRef} from "react";
import ButtonShowMore from "../ButtonShowMore/ButtonShowMore";
import {CurrentCardContext} from "../../contexts/CurrentCardContext";
import {CurrentValueSearchContext} from "../../contexts/CurrentValueSearchContext";
import useSearchForm from "../../utils/hooks/useSearchForm";

function MoviesCardList({onCardSave, onCardDel, savedCards}) {
    const {cards} = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const {valueSearch, isChecked} = useContext(CurrentValueSearchContext);

    const cardListRef = useRef(); // записываем объект, возвращаемый хуком, в переменную и получаем доступ к элементам
    const {filterSearch, filterCheckBox} = useSearchForm(); // хук поиска по строке

    // Применяем фильтрацию на основе состояния чекбокса
    const filteredCards = isChecked ? filterCheckBox(cards) : cards;

    // Применяем фильтрацию по тексту на уже отфильтрованных фильмах
    const filteredAndSearchedCards = filterSearch(filteredCards, valueSearch);

    return (
        <section className="elements">
            <div className="elements__container">
                {filteredAndSearchedCards.length === 0 ?
                    (<h2 className='elements__search-text'>Ничего не найдено</h2>)
                    : (
                        <>
                            <ul className="elements__card-list" ref={cardListRef}>
                                {
                                    filteredAndSearchedCards.map((card) => {
                                        return (
                                            <MoviesCard
                                                key={card.id}
                                                card={card}
                                                savedCards={savedCards}
                                                name={card.nameRU}
                                                image={card.image.url}
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