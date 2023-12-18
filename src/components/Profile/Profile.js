import { useContext, useEffect, useState } from 'react';
import './Profile.css';
import useFormWithValidation from '../../utils/hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CurrentServerErrorsContext } from '../../contexts/CurrentServerErrorsContext';

function Profile({ onSubmit, logOut, loading }) {
    const [isEdit, setEdit] = useState(true); // хук установки редактирования
    const {
        values,
        handleChange,
        setValues,
        errors,
        isFormValid,
        setIsFormValid,
    } = useFormWithValidation(); // хук обработки полей
    const currentUser = useContext(CurrentUserContext);
    const serverErrorText = useContext(CurrentServerErrorsContext);

    useEffect(() => {
        // Устанавливаем в стэйт данные пользователя
        setValues({
            ...values,
            name: currentUser.name,
            email: currentUser.email,
        });
    }, [currentUser]);

    useEffect(() => {
        // Контролируем кнопку редактирования
        if (
            currentUser.name === values.name &&
            currentUser.email === values.email
        ) {
            setIsFormValid(false);
        } else {
            setIsFormValid(true);
        }
    }, [currentUser, values]);

    const handleEdit = () => {
        setEdit(!isEdit);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
        setEdit(true);
    };

    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <form className="profile__form">
                        <h2 className="profile__form-title">
                            Привет, {currentUser.name}!
                        </h2>

                        <fieldset className="profile__form-wrap">
                            <label
                                htmlFor="profile-name"
                                className="profile__form-label"
                            >
                                Имя
                            </label>
                            <input
                                type="text"
                                className="profile__form-input"
                                id="profile-name"
                                name="name"
                                placeholder="Введите имя"
                                minLength="2"
                                maxLength="30"
                                required
                                pattern="^[a-zA-Zа-яА-Я\s\-]*$"
                                onChange={handleChange}
                                value={values.name || ''}
                                disabled={isEdit || loading}
                            />
                            <span className="profile__form-error">
                                {errors.name || ''}
                            </span>

                            <label
                                htmlFor="profile-email"
                                className="profile__form-label"
                            >
                                E-mail
                            </label>
                            <input
                                type="email"
                                className="profile__form-input"
                                id="profile-email"
                                name="email"
                                placeholder="Введите E-mail"
                                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                                required
                                onChange={handleChange}
                                value={values.email || ''}
                                disabled={isEdit || loading}
                            />
                            <span className="profile__form-error">
                                {errors.email || ''}
                            </span>
                        </fieldset>

                        {isEdit ? (
                            <>
                                <button
                                    type="submit"
                                    className="profile__btn profile__btn_edit"
                                    onClick={handleEdit}
                                >
                                    Редактировать
                                </button>

                                <button
                                    type="button"
                                    className="profile__btn profile__btn_exit"
                                    onClick={logOut}
                                >
                                    Выйти из аккаунта
                                </button>
                            </>
                        ) : (
                            <div className="profile__btn-wrap">
                                <span className="profile__serv-error">
                                    {serverErrorText === 'Failed to fetch'
                                        ? 'При регистрации пользователя произошла ошибка'
                                        : serverErrorText}
                                </span>
                                <button
                                    type="submit"
                                    className={`profile__btn profile__btn_save ${
                                        (!isFormValid || loading) && 'profile__btn_disabled'
                                    }`}
                                    disabled={!isFormValid || loading}
                                    onClick={handleSubmit}
                                >
                                    Сохранить
                                </button>
                            </div>
                        )}
                    </form>
                </div>
            </section>
        </>
    );
}

export default Profile;
