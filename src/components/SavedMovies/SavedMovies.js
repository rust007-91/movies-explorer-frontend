import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import MainApi from "../../utils/MainApi";

function SavedMovies({onSubmit, onChange, onCardDel, onCardSave}) {


    return(
        <div className="saved-movies">
            <SearchForm onSubmit={onSubmit} onChange={onChange}/>
            <MoviesCardList onCardDel={onCardDel} onCardSave={onCardSave}/>
        </div>
    );
}

export default SavedMovies;