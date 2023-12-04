import './Login.css';
import AuthWithForm from '../AuthWithForm/AuthWithForm';

function Login({ onSubmit }) {
    return (
        <AuthWithForm
            title="Рады видеть!"
            name="login"
            btnText="Войти"
            questionText="Ещё не зарегистрированы?"
            linkText="Регистрация"
            route="/signup"
            onSubmit={onSubmit}
        />
    );
}

export default Login;
