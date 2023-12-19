import './Portfolio.css';
import foto from '../../images/foto.jpeg';

function Portfolio() {
    return (
        <section className="portfolio" aria-label="Портфолио">
            <div className="portfolio__container">
                <h2 className="portfolio__title">Разработчик</h2>
                <div className="portfolio__divider"></div>

                <article className="info">
                    <div className="info__block">
                        <h3 className="info__heading">Руслан</h3>
                        <p className="info__profession">
                            Фронтенд-разработчик, 32 года
                        </p>
                        <p className="info__descr">

                            Проживаю Санкт-Петербурге, где завершил свой образовательный этап на факультете электротехники и автоматики СПБГЭТУ "ЛЭТИ". За окном необыкновенные виды и архитектурные шедевры, а внутри — моя страсть к кодированию. <br/>

                            Мои дни наполнены не только линиями кода, но и радостью от семейных моментов — у меня замечательная жена и маленький сын, который становится для меня настоящим вдохновением.<br/>

                            Вне программирования я также нахожу удовольствие в танцах и плавании — движение — моя вторая природа. На фоне электротехнических схем и алгоритмов, я настоящий исследователь, начавший свой путь в коде.<br/>

                            С 2016 года я занимался проектированием электрических схем, но после прохождения курса по веб-разработке мой мир расширился, и я полностью погрузился в веб-разработку. Каждый проект для меня — это возможность создавать и воплощать идеи в жизнь, делая современный веб-мир ярче и удобнее.<br/>

                            С нетерпением жду новых технологических вызовов и креативных идей, которые сделают каждый мой проект неповторимым и вдохновляющим.
                        </p>
                        <a
                            href="https://github.com/rust007-91"
                            target="_blank"
                            className="info__link"
                        >
                            Github
                        </a>
                    </div>

                    <img
                        src={foto}
                        alt="фото для портфолио"
                        className="info__foto"
                    />
                </article>

                <nav className="case">
                    <h4 className="case__heading">Портфолио</h4>
                    <ul className="case__list">
                        <li className="case__portfolio">
                            <a
                                href="https://rust007-91.github.io/how-to-learn/"
                                target="_blank"
                                className="case__link"
                            >
                                Статичный сайт
                            </a>
                        </li>
                        <li className="case__portfolio">
                            <a
                                href="https://rust007-91.github.io/russian-travel/index.html"
                                target="_blank"
                                className="case__link"
                            >
                                Адаптивный сайт
                            </a>
                        </li>
                        <li className="case__portfolio">
                            <a
                                href="https://rust007-91.github.io/mesto/"
                                target="_blank"
                                className="case__link"
                            >
                                Одностраничное приложение
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Portfolio;
