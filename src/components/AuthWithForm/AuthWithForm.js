import './AuthWithForm.css';
import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";

function AuthWithForm(props) {
    const { title, name, btnText, questionText, linkText, route } = props;
    return(
        <section className='auth'>
            <div className="auth__container">
                <Link to='/' className='auth__logo-link'>
                    <img src={logo} className="auth__logo-img"></img>
                </Link>
                <form className="auth__form">
                    <h2 className="auth__form-title">{title}</h2>

                    {props.children}

                    <div className="auth__form-wrap">
                        <label htmlFor='email__auth' className="auth__label">E-mail</label>
                        <input
                            id='email__auth'
                            type="email"
                            className="auth__input"
                            name='email'
                            required
                        />
                    </div>

                    <div className="auth__form-wrap">
                        <label htmlFor='password__auth' className="auth__label">Пароль</label>
                        <input
                            id='password__auth'
                            type="password"
                            className="auth__input"
                            name='password'
                            required
                        />
                    </div>

                    <div className="auth__btn-wrap">
                        <button type='submit' className='auth__btn'>{btnText}</button>

                        <p className="auth__question">{questionText}
                            <Link to={route} className="auth__question-link">{linkText}</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default AuthWithForm;