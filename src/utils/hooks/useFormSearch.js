import { useCallback, useContext, useState } from 'react';
import { CurrentSearchContext } from '../../contexts/CurrentSearchContext';

function useFormSearch() {
    const { valueSearch, setValueSearch, isShort, setIsShort } =
        useContext(CurrentSearchContext);
    const [errorValidation, setErrorValidation] = useState(''); // хук установки текста ошибки

    // Обработчик поля инпут
    const handleChange = (e) => {
        const input = e.target;
        const value = input.value;
        setValueSearch(value);

        // мгновенное очищение поля от ошибки
        if (value) {
            return setErrorValidation('');
        }
    };

    // Обработчик чекбокса короткометражек
    const handleCheckbox = () => {
        // Переключаем и записываем в ls взависимости от страницы
        if (location.pathname === '/movies') {
            setIsShort(!isShort);
            localStorage.setItem('toggle', JSON.stringify(!isShort));
        }
        setIsShort(!isShort);
    };

    const resetForm = useCallback(
        (newValues = '', newIsShort = false) => {
            setValueSearch(newValues);
            setIsShort(newIsShort);
        },
        [setValueSearch],
    );

    return {
        handleChange,
        valueSearch,
        setErrorValidation,
        errorValidation,
        handleCheckbox,
        resetForm,
    };
}

export default useFormSearch;
