import './SearchForm.css';
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
                        required
                    />
                    <button
                        type="submit"
                        className="search__btn">

                        <span className="search__arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
                            <path d="M1 13L6 7L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </span>
                    </button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;