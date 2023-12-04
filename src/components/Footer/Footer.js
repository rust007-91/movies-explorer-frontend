import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 className="footer__heading">
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </h2>
                <div className="footer__devider"></div>
                <div className="footer__block">
                    <p className="footer__copy">
                        &copy; {new Date().getFullYear()}.
                    </p>
                    <nav className="footer__links">
                        <a
                            href="https://practicum.yandex.ru/"
                            className="footer__link"
                            target="_blank"
                        >
                            Яндекс.Практикум
                        </a>
                        <a
                            href="https://github.com/rust007-91"
                            className="footer__link"
                            target="_blank"
                        >
                            Github
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
