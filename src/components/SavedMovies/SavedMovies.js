import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ onSubmit }) {
    return (
        <div className="saved-movies">
            <SearchForm onSubmit={onSubmit} />
            <MoviesCardList />
        </div>
    );
}

export default SavedMovies;
