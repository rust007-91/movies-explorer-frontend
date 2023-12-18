import './ButtonShowMore.css';
import { useState, useEffect } from 'react';
import useResize from '../../utils/hooks/useResize';
import {
    DESCTOP_CARD_COUNT_ONE,
    DESCTOP_CARD_COUNT_TWO,
    DESCTOP_CARD_COUNT_THREE,
    DESCTOP_CARD_COUNT_FOUR,
} from '../../utils/constants';

function ButtonShowMore({filteredAndSearchedCards}) {
    const [isBtnMore, setBtnMore] = useState(false); // хук загрузки кнопки "Ещё"
    const [visibleMovies, setVisibleMovies] = useState([]); // хук загрузки кнопки "Ещё"
    const { isScreenXL, isScreenMD, isScreenML, isScreenXS } = useResize(); // хук изменения расширения экрана

    const [countCardXL, setCountCardXL] = useState(16); // хук установки карточек по умолчанию для экранов 1279 и больше
    const [countCardML, setCountCardML] = useState(12); // хук установки карточек по умолчанию для экранов до 1279
    const [countCardMD, setCountCardMD] = useState(8); // хук установки карточек по умолчанию для экранов 767 и больше
    const [countCardXS, setCountCardXS] = useState(5); // хук установки карточек по умолчанию для экранов 320 и больше

    useEffect(() => {
        // Проверяем, остались ли ещё карточки для отображения
        setBtnMore(filteredAndSearchedCards.length > visibleMovies.length && location.pathname === '/movies');
    }, [filteredAndSearchedCards, visibleMovies]);

    const handleBtn = () => {
        let cardsScreen = 0;

        //условие добавления кол-ва карточек в зависимости от расширения
        if (isScreenXL) {
            cardsScreen = countCardXL + DESCTOP_CARD_COUNT_FOUR;
            setCountCardXL(cardsScreen);
        } else if (isScreenML) {
            cardsScreen = countCardML + DESCTOP_CARD_COUNT_THREE;
            setCountCardML(cardsScreen);
        } else if (isScreenMD) {
            cardsScreen = countCardMD + DESCTOP_CARD_COUNT_TWO;
            setCountCardMD(cardsScreen);
        } else if (isScreenXS) {
            cardsScreen = countCardXS + DESCTOP_CARD_COUNT_ONE;
            setCountCardXS(cardsScreen);
        }

        const array = Array.from(document.querySelector('.elements__card-list').children);
        const updatedVisibleMovies = array.slice(0, cardsScreen);
        setVisibleMovies(updatedVisibleMovies);
        // выставляем видимость карточек в массиве
        updatedVisibleMovies.forEach((card, i) => {
            card.classList.add('elements__card_active');
        });

        // Проверяем, остались ли ещё карточки для отображения
        setBtnMore(updatedVisibleMovies.length < filteredAndSearchedCards.length);
    };

    return (
        <div
            className={`elements__btn_wrap ${
                isBtnMore && 'elements__btn_wrap_active'
            }`}
        >
            <button
                type="button"
                className="elements__btn_more"
                onClick={handleBtn}
            >
                Ещё
            </button>
        </div>
    );
}

export default ButtonShowMore;
