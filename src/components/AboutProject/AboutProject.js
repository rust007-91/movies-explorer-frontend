import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="project">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__divider"></div>
                <ul className="table-project">
                    <li className="table-project__cell">
                        <h3 className="table-project__heading">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="table-project__text">
                            Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.
                        </p>
                    </li>
                    <li className="table-project__cell">
                        <h3 className="table-project__heading">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="table-project__text">
                            У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </li>
                </ul>

                <div className="table-timeline">
                    <p className="unit unit_first">1 неделя</p>
                    <p className="unit unit_last">4 недели</p>
                    <p className="table-timeline__sprint">Back-end</p>
                    <p className="table-timeline__sprint">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
