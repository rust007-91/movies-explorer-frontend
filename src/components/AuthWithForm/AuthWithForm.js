import './AuthWithForm.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import useFormWithValidation from '../../utils/hooks/useFormWithValidation';
import { useContext, useEffect } from 'react';
import { CurrentServerErrorsContext } from '../../contexts/CurrentServerErrorsContext';

function AuthWithForm({ title, name, btnText, questionText, linkText, route, onSubmit, loading }) {
    const serverErrorText = useContext(CurrentServerErrorsContext); // контекст ошибки от сервера

    const {
        values,
        handleChange,
        errors,
        isInputValid,
        isFormValid,
        resetForm,
    } = useFormWithValidation(); // хук обработки поле
    const location = useLocation();

    useEffect(() => {
        resetForm({}, {}, false);
    }, [resetForm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    };

    console.log(isFormValid)
    console.log(loading)

    return (
        <section className="auth">
            <div className="auth__container">
                <Link to="/" className="auth__logo-link">
                    <img src={logo} className="auth__logo-img"></img>
                </Link>
                <form className="auth__form" name={`form-${name}`} noValidate>
                    <h2 className="auth__form-title">{title}</h2>

                    <fieldset className="auth__form-fieldset">
                        {location.pathname === '/signup' && (
                            <>
                                <label
                                    htmlFor="name__auth"
                                    className="auth__label"
                                >
                                    Имя
                                    <input
                                        id="name__auth"
                                        type="text"
                                        className={`auth__input ${
                                            isInputValid
                                                ? ''
                                                : 'auth__input_error'
                                        }`}
                                        name="name"
                                        minLength="5"
                                        maxLength="30"
                                        required
                                        pattern="^[a-zA-Zа-яА-Я\s\-]*$"
                                        onChange={handleChange}
                                        value={values.name || ''}
                                    />
                                </label>
                                <span className="auth__form-error">
                                    {errors.name || ''}
                                </span>
                            </>
                        )}
                        <label htmlFor="email__auth" className="auth__label">
                            E-mail
                            <input
                                id="email__auth"
                                type="email"
                                className={`auth__input ${
                                    isInputValid ? '' : 'auth__input_error'
                                }`}
                                name="email"
                                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                                required
                                onChange={handleChange}
                                value={values.email || ''}
                            />
                        </label>
                        <span className="auth__form-error">
                            {errors.email || ''}
                        </span>

                        <label htmlFor="password__auth" className="auth__label">
                            Пароль
                            <input
                                id="password__auth"
                                type="password"
                                minLength="2"
                                className={`auth__input ${
                                    isInputValid ? '' : 'auth__input_error'
                                }`}
                                name="password"
                                required
                                onChange={handleChange}
                                value={values.password || ''}
                            />
                        </label>
                        <span className="auth__form-error">
                            {errors.password || ''}
                        </span>
                    </fieldset>

                    <div className="auth__btn-wrap">
                        <span className="auth__serv-error">
                            {serverErrorText === 'Failed to fetch'
                                ? 'При регистрации пользователя произошла ошибка'
                                : serverErrorText}
                        </span>

                        <button
                            type="submit"
                            className={`auth__btn ${
                                (!isFormValid || loading) && 'auth__btn_disabled'
                            }`}
                            disabled={!isFormValid || loading}
                            onClick={handleSubmit}
                        >
                            {btnText}
                        </button>

                        <p className="auth__question">
                            {questionText}
                            <Link to={route} className="auth__question-link">
                                {linkText}
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AuthWithForm;
