
const useSearchForm = () => {

    // Функция фильтрации фильмов (возвращает отфильтрованный массив)
    const filterSearch = (data, value) => {
        return data.filter((item) => {
            const nameRU = item.nameRU.toLowerCase(); // достаём текст и приводим к нижнему регистру
            const nameEN = item.nameEN.toLowerCase();
            const searchText = value.toLowerCase(); // текст в поисковом поле

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
    }

    return {filterSearch, filterCheckBox};
}

export default useSearchForm;