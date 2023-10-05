import {useState} from "react";
import './MoviesCard.css';
import robocop from '../../images/test_card/robocop1.jpg';

function MoviesCard() {
    const [isLiked, setLiked] = useState(false);

    const handleLike = () => {
        return isLiked ? setLiked(false) : setLiked(true);
    }

    const buttonCard = location.pathname === '/movies' ?
        <button
            className= {`elements__card-savebtn ${isLiked && "elements__card-savebtn_active"}`}
            type="button"
            onClick={handleLike}
        ></button> :
        <button
            className="elements__card-delbtn"
            type="button"
        >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99951 8.94287L10.3566 11.2999L11.4172 10.2393L9.06017 7.88221L11.2994 5.64295L10.2388 4.58229L7.99951 6.82155L5.76037 4.58241L4.69971 5.64307L6.93885 7.88221L4.58192 10.2391L5.64258 11.2998L7.99951 8.94287Z" fill="white"/>
            </svg>
        </button>

    return(
        <>
            <li className="elements__card">
                <img
                    src={robocop}
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>
                    {buttonCard}

                </div>
            </li>
            <li className="elements__card">
                <img
                    src={robocop}
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>
                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src={robocop}
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>
                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src={robocop}
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>
                    {buttonCard}
                </div>
            </li>

            <li className="elements__card">
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/f/ff/Mortal_Kombat_1_cover.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>
                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/f/ff/Mortal_Kombat_1_cover.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/f/ff/Mortal_Kombat_1_cover.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://upload.wikimedia.org/wikipedia/ru/f/ff/Mortal_Kombat_1_cover.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>

            <li className="elements__card">
                <img
                    src="https://cs10.pikabu.ru/post_img/big/2018/10/21/6/1540111921155287759.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://cs10.pikabu.ru/post_img/big/2018/10/21/6/1540111921155287759.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://cs10.pikabu.ru/post_img/big/2018/10/21/6/1540111921155287759.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://cs10.pikabu.ru/post_img/big/2018/10/21/6/1540111921155287759.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>

            <li className="elements__card">
                <img
                    src="https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
            <li className="elements__card">
                <img
                    src="https://aif-s3.aif.ru/images/018/332/9e27cf5647971c8736731decb0167653.jpg"
                    alt="обложка фильма"
                    className="elements__card-image"
                />
                <div className="elements__wrapper">
                    <div className="elements__wrapper-prop">
                        <h2 className="elements__card-title">
                            33 слова о дизайне
                        </h2>
                        <div className="elements__card-time">1ч42м</div>
                    </div>

                    {buttonCard}
                </div>
            </li>
        </>
    );
}

export default MoviesCard;