import './ButtonShowMore.css';
import { useContext, useState, useEffect } from 'react';
import { CurrentCardContext } from '../../contexts/CurrentCardContext';
import useResize from '../../utils/hooks/useResize';
import {
    DESCTOP_CARD_COUNT_ONE,
    DESCTOP_CARD_COUNT_TWO,
    DESCTOP_CARD_COUNT_FOUR,
} from '../../utils/constants';

function ButtonShowMore({ cardListRef }) {
    const { movies } = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const [isBtnMore, setBtnMore] = useState(false); // хук загрузки кнопки "Ещё"
    const { isScreenXL, isScreenMD, isScreenXS } = useResize(); // хук изменения расширения экрана

    const [countCardXL, setCountCardXL] = useState(16); // хук установки карточек по умолчанию для экранов 1279 и больше
    const [countCardMD, setCountCardMD] = useState(8); // хук установки карточек по умолчанию для экранов 767 и больше
    const [countCardXS, setCountCardXS] = useState(5); // хук установки карточек по умолчанию для экранов 320 и больше

    const handleBtn = () => {
        let cardsScreen = 0;

        //условие добавления кол-ва карточек в зависимости от расширения
        if (isScreenXL) {
            cardsScreen = countCardXL + DESCTOP_CARD_COUNT_FOUR;
            setCountCardXL(cardsScreen);
        } else if (isScreenMD) {
            cardsScreen = countCardMD + DESCTOP_CARD_COUNT_TWO;
            setCountCardMD(cardsScreen);
        } else if (isScreenXS) {
            cardsScreen = countCardXS + DESCTOP_CARD_COUNT_ONE;
            setCountCardXS(cardsScreen);
        }

        if (cardListRef.current) {
            // проверка массива
            // находим и извлекаем в новый массив элементы для видимости
            const array = Array.from(cardListRef.current.children);
            const visibleCards = array.slice(0, cardsScreen);
            // выставляем видимость карточек в массиве
            visibleCards.forEach((card) =>
                card.classList.add('elements__card_active'),
            );

            // Проверяем, остались ли ещё карточки для отображения
            const remainingCards = movies.length - visibleCards.length;
            // условия проявления кнопки
            setBtnMore(remainingCards > 0);
        }
    };

    useEffect(() => {
        setBtnMore(
            movies.length > countCardXL && location.pathname === '/movies',
        );
    }, [movies, countCardXL]);

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
