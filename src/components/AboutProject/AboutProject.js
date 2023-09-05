import './AboutProject.css';

function AboutProject() {
    return(
        <section className="about-project" id="project">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__divider"></div>
                <ul className="table__project">
                    <li className="table__cell">
                        <h3 className="table__heading">Дипломный проект включал 5 этапов</h3>
                        <p className="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="table__cell">
                        <h3 className="table__heading">На выполнение диплома ушло 5 недель</h3>
                        <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>

                <ul className="table__timeline">
                    <li className="table__unit">
                        <p className="table__unit-first">1 неделя</p>
                        <p className="table__unit-sprint">Back-end</p>
                    </li>
                    <li className="table__unit">
                        <p className="table__unit-last">4 недели</p>
                        <p className="table__unit-sprint">Front-end</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutProject;