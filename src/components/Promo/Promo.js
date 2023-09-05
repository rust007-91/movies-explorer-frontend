import './Promo.css';
import promo__image from '../../images/promo__image.svg'

function Promo() {
    return(
        <section className="promo">
            <div className="promo__container">
                <div className="promo__content">
                    <div className="promo__text">
                        <h1 className="promo__title">Учебный проект студента факультета
                            Веб-разработки.</h1>
                        <p className="promo__descr">Листайте ниже, чтобы узнать больше про этот <br />
                            проект и его создателя.</p>
                    </div>
                    <img src={promo__image} alt="земной веб-шар" className="promo__img"/>
                </div>

                <div className="promo__btn-wrap">
                    <button className="promo__btn">
                        <a href="#project" className="promo__link">Узнать больше</a>
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Promo;