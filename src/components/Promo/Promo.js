import './Promo.css';
import promo__image from '../../images/promo__image.svg';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__content">
                    <div className="promo__text">
                        <h1 className="promo__title">
                            Учебный проект студента факультета
                            Веб&#8209;разработки.
                        </h1>
                        <p className="promo__descr">
                            Листайте ниже, чтобы узнать больше про этот <br />
                            проект и его создателя.
                        </p>
                    </div>
                    <img
                        src={promo__image}
                        alt="земной веб-шар"
                        className="promo__img"
                    />
                </div>

                <div className="promo__btn-wrap">
                    <a href="#project" className="promo__btn">
                        Узнать больше
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Promo;
