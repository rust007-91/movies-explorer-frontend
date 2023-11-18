import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useContext, useState} from "react";
import {CurrentValueSearchContext} from "../../contexts/CurrentValueSearchContext";

function SearchForm({onSubmit}) {
    const {valueSearch, setValueSearch} = useContext(CurrentValueSearchContext);
    const [errors, setErrors] = useState(""); // хук установки текста ошибки

    // Обработчик поля инпут
    const handleChange = (e) => {
        const input = e.target;
        const value = input.value;
        setValueSearch(value);

        // Очищение поля от ошибки
        if (value) {
            return setErrors("");
        }
    }

    // Обработчик кнопки
    const handleSubmit = (e) => {
        e.preventDefault();
        // проверка на валидность и сохранение в localStorage
        if (!valueSearch) {
            setErrors("Нужно ввести ключевое слово");
        } else {
            localStorage.setItem("searchText", valueSearch);
            onSubmit();
        }
    }

    return(
        <section className="search">
            <div className="search__container">
                <form className="search__form" role="search" noValidate>
                    <input
                        type="search"
                        name="searchFilm"
                        minLength="1"
                        className="search__input"
                        placeholder="Фильм"
                        onChange={handleChange}
                        value={valueSearch || ""}
                        required
                    />

                    <button
                        type="submit"
                        className="search__btn"
                        onClick={handleSubmit}
                    >
                        <span className="search__arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
                                <path d="M1 13L6 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </form>

                <span className="search__form-error">{errors || ""}</span>

                <FilterCheckbox />
            </div>
        </section>
    );
}

export default SearchForm;