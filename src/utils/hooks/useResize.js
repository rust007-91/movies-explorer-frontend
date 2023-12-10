import { useEffect, useState } from 'react';
import { SCREEN_XS, SCREEN_MD, SCREEN_ML, SCREEN_XL } from '../constants';
const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth); // хук установки значения ширины экрана

    useEffect(() => {
        const handleResize = (e) => {
            // обработчик изменения разрешения экрана
            const innerWidth = e.target.innerWidth;
            setWidth(innerWidth); // установка текущего значения
        };
        // событие изменения разрешения экрана
        window.addEventListener('resize', handleResize);
        // очистка события
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);


    return {
        width,
        isScreenXL: width >= SCREEN_XL,
        isScreenMD: width >= SCREEN_MD,
        isScreenML: width >= SCREEN_ML,
        isScreenXS: width >= SCREEN_XS,
    };
};

export default useResize;
