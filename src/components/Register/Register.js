import './Register.css';
import AuthWithForm from "../AuthWithForm/AuthWithForm";

function Register() {
    return(
        <AuthWithForm
            title='Добро пожаловать!'
            name='register'
            btnText='Зарегистрироваться'
            questionText='Уже зарегистрированы?'
            linkText='Войти'
            route={'/signin'}
        >
            <div className="auth__form-wrap">
                <label htmlFor='name__auth' className="auth__label">Имя</label>
                <input
                    id='name__auth'
                    type="text"
                    className="auth__input"
                    name='name'
                    minLength='2'
                    maxLength='30'
                    required
                />
            </div>
        </AuthWithForm>
    );
}

export default Register;