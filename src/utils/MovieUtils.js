import axios from 'axios'
import request from '../request'

export const getGenresFromMovie = async (movie) => {
    const { fetchMovieGenres } = request
    const allGenres = (await axios.get(fetchMovieGenres)).data.genres
    return allGenres
        .filter((genre) => movie.genre_ids.includes(genre.id))
        .map(({ name }) => name)
}
