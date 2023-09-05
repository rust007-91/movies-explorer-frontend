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
                <ul className="table__techs">
                    <li className="table__stack">
                        <p className="table__stack_text">HTML</p>
                    </li>
                    <li className="table__stack">
                        <p className="table__stack_text">CSS</p>
                    </li>
                    <li className="table__stack">
                        <p className="table__stack_text">JS</p>
                    </li>
                    <li className="table__stack">
                        <p className="table__stack_text">React</p>
                    </li>
                    <li className="table__stack">
                        <p className="table__stack_text">Git</p>
                    </li>
                    <li className="table__stack">
                        <p className="table__stack_text">Express.js</p>
                    </li>
                    <li className="table__stack">
                        <p className="table__stack_text">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Techs;