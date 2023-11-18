import './ButtonShowMore.css';
import {useContext, useState} from "react";
import {CurrentBtnMoreContext} from "../../contexts/CurrentBtnMoreContext";
import {CurrentCardContext} from "../../contexts/CurrentCardContext";
import useResize from "../../utils/hooks/useResize";

function ButtonShowMore ({cardListRef}) {
    const cards = useContext(CurrentCardContext); // Подписываемся на контекст CurrentCardsContext
    const {isBtnMore, setBtnMore} = useContext(CurrentBtnMoreContext);

    const {isScreenXL, isScreenMD, isScreenXS} = useResize(); // хук изменения расширения экрана

    const [countCardXL, setCountCardXL] = useState(16); // хук установки карточек по умолчанию для экранов 1279 и больше
    const [countCardMD, setCountCardMD] = useState(8); // хук установки карточек по умолчанию для экранов 767 и больше
    const [countCardXS, setCountCardXS] = useState(5); // хук установки карточек по умолчанию для экранов 320 и больше

    const handleBtn = () => {
        const cardsLength = cards.length;
        let cardsScreen = 0;

        //условие добавления кол-ва карточек в зависимости от расширения
        if (isScreenXL) {
            cardsScreen = countCardXL + 4;
        } else if (isScreenMD) {
            cardsScreen = countCardMD + 2;
        } else if (isScreenXS) {
            cardsScreen = countCardXS + 1;
        }

        if(cardListRef.current) { // проверка массива
            // находим и извлекаем в новый массив элементы для видимости
            const array = Array.from(cardListRef.current.children);
            const visibleCards = array.slice(0, cardsScreen);
            // выставляем видимость карточка в массиве
            visibleCards.forEach((card) => card.classList.add('elements__card_active'))
            // Условие установки карточек на странице по умолчанию
            if (isScreenXL) {
                setCountCardXL(cardsScreen)
            } else if (isScreenMD) {
                setCountCardMD(cardsScreen);
            } else if (isScreenXS) {
                setCountCardXS(cardsScreen);
            }

            if(cardsLength === visibleCards.length) {
                return setBtnMore(false);
            }
        }
    };

    return(
        <div className={`elements__btn_wrap ${isBtnMore && "elements__btn_wrap_active"}`}>
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