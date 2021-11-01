import React, { useState, useEffect } from 'react'
import axios, * as others from 'axios'
import './Row.css'
import Youtube from 'react-youtube'
import MoviePoster from './MoviePoster'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl)
            // console.log(requests.data.results);
            setMovie(requests.data.results)
            return requests
        }
        fetchData()
    }, [fetchUrl]) // [] run once when row load and dont run it again

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie, index) => (
                    <MoviePoster
                        key={`${title}-${movie.id}`}
                        isLargeRow={isLargeRow}
                        movie={movie}
                        displayLoading={index <= 10}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
