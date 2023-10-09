import './Techs.css';

function Techs() {
    return(
        <section className="techs">
            <div className="techs__container">
                <h2 className="techs__title">Технологии</h2>
                <div className="techs__divider"></div>
                <h3 className="techs__heading">7 технологий</h3>
                <p className="techs__descr">На курсе веб-разработки мы освоили технологии, которые применили <br/>
                    в дипломном проекте.</p>
                <ul className="table-techs">
                    <li className="table-techs__stack">
                        <p className="table-techs__text">HTML</p>
                    </li>
                    <li className="table-techs__stack">
                        <p className="table-techs__text">CSS</p>
                    </li>
                    <li className="table-techs__stack">
                        <p className="table-techs__text">JS</p>
                    </li>
                    <li className="table-techs__stack">
                        <p className="table-techs__text">React</p>
                    </li>
                    <li className="table-techs__stack">
                        <p className="table-techs__text">Git</p>
                    </li>
                    <li className="table-techs__stack">
                        <p className="table-techs__text">Express.js</p>
                    </li>
                    <li className="table-techs__stack">
                        <p className="table-techs__text">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;