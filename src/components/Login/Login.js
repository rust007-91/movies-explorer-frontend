import './Login.css';
import AuthWithForm from "../AuthWithForm/AuthWithForm";

function Login() {
    return(
        <AuthWithForm
            title='Рады видеть!'
            name='login'
            btnText='Войти'
            questionText='Ещё не зарегистрированы?'
            linkText='Регистрация'
            route='/signup'
        />
    );
}

export default Login;