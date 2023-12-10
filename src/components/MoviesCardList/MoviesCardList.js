import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext, useEffect, useRef, useState } from 'react';
import ButtonShowMore from '../ButtonShowMore/ButtonShowMore';
import { CurrentCardContext } from '../../contexts/CurrentCardContext';
import { CurrentSearchContext } from '../../contexts/CurrentSearchContext';
import filterSearchForm from '../../utils/filterSearchForm';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
    const location = useLocation(); // хук определения страницы
    const cardListRef = useRef(); // записываем объект, возвращаемый хуком, в переменную и получаем доступ к элементам
    const { movies, savedMovies } = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const { valueSearch, isShort } = useContext(CurrentSearchContext);
    const [isSearchExecuted, setIsSearchExecuted] = useState(false); // хук отслеживания произведен ли поиск
    const [isMoviesWithSaved, setMoviesWithSaved] = useState([]);
    const { filterSearch, filterCheckBox } = filterSearchForm(); // хук поиска по строке

    // Проверка фильмов на наличие сохранённых и расширение объекта меткой "isSaved"
    useEffect(() => {
        const moviesWithSaved = movies.map((movie) => {
            const isSaved = savedMovies.some(
                (savedMovie) => movie.id === savedMovie.movieId,
            );
            return { ...movie, isSaved };
        });
        setMoviesWithSaved(moviesWithSaved);
    }, [savedMovies, movies.id]);

    // Определяем какой массив карт применять в зависимости от страницы
    const currentCards =
        location.pathname === '/movies' ? isMoviesWithSaved : savedMovies;

    // Применяем фильтрацию на основе состояния чекбокса
    const filteredShortCards = isShort
        ? filterCheckBox(currentCards)
        : currentCards;
    // Применяем фильтрацию по тексту
    const filteredAndSearchedCards = filterSearch(
        filteredShortCards,
        valueSearch,
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
                        <ul className="elements__card-list" >
                            {filteredAndSearchedCards.map((card) => {
                                return (
                                    <MoviesCard
                                        key={card.id || card.movieId}
                                        currentCard={card}
                                        name={card.nameRU}
                                        duration={card.duration}
                                        trailer={card.trailerLink}
                                        savedMovies={savedMovies}
                                        isSaved={card.isSaved}
                                    />
                                );
                            })}
                        </ul>
                        <ButtonShowMore filteredAndSearchedCards={filteredAndSearchedCards}/>
                    </>
                )}
            </div>
        </section>
    );
}

export default MoviesCardList;
