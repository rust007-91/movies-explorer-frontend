import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css';
import {useContext} from "react";
import {CurrenPreloaderContext} from "../../contexts/CurrenPreloaderContext";

function Movies({onSubmit, onChange, onCardSave, onCardDel, savedCards}) {
    const isLoading = useContext(CurrenPreloaderContext);

    return(
        <div className="movies">
            <SearchForm onSubmit={onSubmit} onChange={onChange}/>
            {isLoading ? <Preloader /> : <MoviesCardList onCardSave={onCardSave} onCardDel={onCardDel} savedCards={savedCards}/>}
        </div>
    );
}

export default Movies;