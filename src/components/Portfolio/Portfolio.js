import './Portfolio.css';
import foto from '../../images/portfolio__foto.png';

function Portfolio() {
    return(
        <section className="portfolio" aria-label="Портфолио">
            <div className="portfolio__container">
                <h2 className="portfolio__title">Студент</h2>
                <div className="portfolio__divider"></div>

                <article className="info">
                    <div className="info__block">
                        <h3 className="info__heading">Виталий</h3>
                        <p className="info__profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="info__descr">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                        <a href="https://github.com/rust007-91" target="_blank" className="info__link">Github</a>
                    </div>

                    <img src={foto} alt="фото для портфолио" className="info__foto"/>
                </article>

                <nav className="case">
                    <h4 className="case__heading">Портфолио</h4>
                    <ul className="case__list">
                        <li className="case__portfolio">
                            <a href="https://rust007-91.github.io/how-to-learn/" target="_blank" className="case__link">Статичный сайт</a>
                        </li>
                        <div className="case__divider"></div>
                        <li className="case__portfolio">
                            <a href="https://rust007-91.github.io/russian-travel/index.html" target="_blank"
                               className="case__link">Адаптивный сайт</a>
                        </li>
                        <div className="case__divider"></div>
                        <li className="case__portfolio">
                            <a href="https://rust007-91.github.io/react-mesto-auth/" target="_blank"
                               className="case__link">Одностраничное приложение</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Portfolio;