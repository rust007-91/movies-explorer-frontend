import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return(
        <section className="elements">
            <div className="elements__container">
                <ul className="elements__card-list">
                    <MoviesCard />
                </ul>

                <div className="elements__btn_wrap">
                    <button type="button" className="elements__btn_more">
                        Ещё
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MoviesCardList;