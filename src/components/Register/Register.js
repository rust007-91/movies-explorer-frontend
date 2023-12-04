import './Register.css';
import AuthWithForm from '../AuthWithForm/AuthWithForm';

function Register({ onSubmit }) {
    return (
        <AuthWithForm
            title="Добро пожаловать!"
            name="register"
            btnText="Зарегистрироваться"
            questionText="Уже зарегистрированы?"
            linkText="Войти"
            route={'/signin'}
            onSubmit={onSubmit}
        ></AuthWithForm>
    );
}

export default Register;
