const filterSearchForm = () => {
    // Функция фильтрации фильмов (возвращает отфильтрованный массив)
    const filterSearch = (data, value) => {
        return data.filter((item) => {
            const nameRU = (item.nameRU || '').toLowerCase(); // проверка на null или undefined
            const nameEN = (item.nameEN || '').toLowerCase();
            const searchText = (value || '').toLowerCase(); // проверка на null или undefined

            // Проверяем, содержит ли nameRU или nameEN введенный текст запроса
            if (nameRU.includes(searchText) || nameEN.includes(searchText)) {
                return true;
            }
            return false; // Исключаем элемент из результата фильтрации
        });
    };

    const filterCheckBox = (data) => {
        return data.filter((item) => {
            if (item.duration < 40) {
                return true;
            }
            return false;
        });
    };

    return { filterSearch, filterCheckBox };
};

export default filterSearchForm;
