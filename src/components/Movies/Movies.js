import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ loading, onSubmit }) {
    return (
        <div className="movies">
            <SearchForm onSubmit={onSubmit} />
            {loading ? <Preloader /> : <MoviesCardList />}
        </div>
    );
}

export default Movies;
