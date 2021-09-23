import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '78807bfaa733743649906b3c345fca45',
        language: 'es-ES'
    }
});

export default movieDB;