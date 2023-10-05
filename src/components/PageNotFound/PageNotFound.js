import './PageNotFound.css';
import {useNavigate, Link} from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1, {replace: true}); // вернуться на шаг назад и почистить
    }

    return(
        <section className="found">
            <div className="found__container">
                <h2 className="found__heading">404</h2>
                <p className="found__text">Страница не найдена</p>
                <Link className="found__btn-back" onClick={goBack}>Назад</Link>
            </div>
        </section>
    );
}

export default PageNotFound;
