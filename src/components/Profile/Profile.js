import {useState} from "react";
import './Profile.css';
import Header from "../Header/Header";

function Profile() {
    const [isEdit, setEdit] = useState(true); // хук установки редактирования

    return(
        <>
            <Header />
            <section className="profile">
                <div className="profile__container">
                    <form className="profile__form">
                        <h2 className="profile__form-title">Привет, Виталий!</h2>

                        <div className="profile__form-wrap">
                            <label htmlFor="profile-name" className="profile__form-label">Имя</label>
                            <input
                                type="text"
                                className="profile__form-input"
                                id="profile-name"
                                name="name"
                                placeholder="Виталий"
                                minLength='2'
                                maxLength='30'
                                value="Виталий"
                            />

                            <label htmlFor="profile-email" className="profile__form-label">E-mail</label>
                            <input
                                type="email"
                                className="profile__form-input"
                                id="profile-email"
                                name="email"
                                placeholder="Введите E-mail"
                                value="pochta@yandex.ru"
                            />
                        </div>

                        {
                            !isEdit ? (
                                <>
                                    <button type='submit' className='profile__btn_edit'>Редактировать</button>
                                    <button type='button' className="profile__btn_exit">Выйти из аккаунта</button>
                                </>
                            ) : (
                                <button type='submit' className='profile__btn_save'>Сохранить</button>
                            )
                        }
                    </form>
                </div>
            </section>
        </>

    );
}

export default Profile;