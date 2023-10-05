import './SearchForm.css';
import searchBtn from '../../images/search__btn.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return(
        <section className="search">
            <div className="search__container">
                <form className="search__form">
                    <input
                        type="search"
                        name="film"
                        className="search__input"
                        placeholder="Фильм"
                    />
                    <button
                        type="submit"
                        className="search__btn">
                        <img className="search__img" src={searchBtn} alt="кнопка поиска"/>
                    </button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;