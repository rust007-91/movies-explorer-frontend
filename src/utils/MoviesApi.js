const URL_MOVIES = 'https://api.nomoreparties.co/beatfilm-movies';

function MoviesApi() {
    const getMoviesApi = () => {
        return fetch(URL_MOVIES, {
            method: 'GET',
            headers: {
                "content-type": "application/json"
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }
    return {getMoviesApi};
}

export default MoviesApi;