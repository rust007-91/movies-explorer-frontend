import {useEffect, useState} from "react";

const useResize = () => {
    const SCREEN_XS = 320;
    const SCREEN_MD = 767;
    const SCREEN_XL = 1279;

    const [width, setWidth] = useState(window.innerWidth); // хук установки значения ширины экрана

    useEffect(() => {
        const handleResize = (e) => { // обработчик изменения разрешения экрана
            setWidth(e.target.innerWidth); // установка текущего значения
        };

        window.addEventListener('resize', handleResize); // событие изменения разрешения экрана

        return () => {
            window.removeEventListener('resize', handleResize); // очистка события
        };
    }, [width]);

    return {
        width,
        isScreenXL: width >= SCREEN_XL,
        isScreenMD: width >= SCREEN_MD,
        isScreenXS: width >= SCREEN_XS,
    };
};

export default useResize;