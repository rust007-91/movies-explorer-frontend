import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({ onSubmit, onChange, onCardSave, onCardDel, loading }) {
    return (
        <div className="movies">
            <SearchForm onSubmit={onSubmit} onChange={onChange} />
            {loading ? (
                <Preloader />
            ) : (
                <MoviesCardList onCardSave={onCardSave} onCardDel={onCardDel} />
            )}
        </div>
    );
}

export default Movies;
