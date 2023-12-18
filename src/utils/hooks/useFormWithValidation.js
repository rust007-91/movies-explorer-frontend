import { useCallback, useState } from 'react';

//хук обработки формы
function useFormWithValidation() {
    const [values, setValues] = useState({}); // хук хранение данных инпутов формы
    const [errors, setErrors] = useState({}); // хук хранение ошибок валидации
    const [isFormValid, setIsFormValid] = useState(false); // хук хранение статуса валидности
    const [isInputValid, setIsInputValid] = useState(true); // хук хранение статуса валидности

    const handleChange = (e) => {
        const input = e.target;
        const value = input.value; // данные поля
        const name = input.name; // имя инпута

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: input.validationMessage });
        setIsFormValid(input.closest('form').checkValidity());
        setIsInputValid(input.validity.valid);
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsFormValid(newIsValid);
        },
        [setValues, setErrors, setIsFormValid],
    );

    return {
        values,
        handleChange,
        setValues,
        errors,
        isInputValid,
        isFormValid,
        resetForm,
        setIsFormValid,
    };
}

export default useFormWithValidation;
