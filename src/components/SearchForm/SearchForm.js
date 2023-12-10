import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect } from 'react';
import useFormSearch from '../../utils/hooks/useFormSearch';

function SearchForm({ onSubmit }) {
    const {
        handleChange,
        valueSearch,
        setErrorValidation,
        errorValidation,
        handleCheckbox,
        resetForm,
    } = useFormSearch();

    useEffect(() => {
        const currentValue =
            location.pathname === '/movies'
                ? localStorage.getItem('searchText')
                : '';
        const currentCheckBox =
            location.pathname === '/movies'
                ? JSON.parse(localStorage.getItem('toggle'))
                : false;
        resetForm(currentValue, currentCheckBox);
    }, [resetForm]);

    // Обработчик кнопки
    const handleSubmit = (e) => {
        e.preventDefault();
        // проверка на валидность и сохранение
        if (!valueSearch) {
            setErrorValidation('Нужно ввести ключевое слово');
        } else {
            // обработчик сработает только на старнице movies
            if(location.pathname === '/movies') {
                localStorage.setItem('searchText', valueSearch); // запись запроса в лс
                onSubmit();
            }
        }
    };

    return (
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
                        value={valueSearch || ''}
                        required
                    />

                    <button
                        type="submit"
                        className="search__btn"
                        onClick={handleSubmit}
                    >
                        <span className="search__arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="7"
                                height="14"
                                viewBox="0 0 7 14"
                                fill="none"
                            >
                                <path
                                    d="M1 13L6 7L1 1"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </form>

                <span className="search__form-error">
                    {errorValidation || ''}
                </span>

                <FilterCheckbox onChange={handleCheckbox} />
            </div>
        </section>
    );
}

export default SearchForm;
