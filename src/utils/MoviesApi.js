import { URL_MOVIES } from '../utils/constants';

function MoviesApi() {
    const getMoviesApi = () => {
        return fetch(URL_MOVIES, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        });
    };
    return { getMoviesApi };
}

export default MoviesApi;
