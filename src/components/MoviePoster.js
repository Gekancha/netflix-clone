import { Skeleton } from 'antd'
import { useState } from 'react'
import { useMovieContext } from '../contexts/MovieProvider'

const base_url = 'https://image.tmdb.org/t/p/original/'

function MoviePoster({ movie, isLargeRow, displayLoading }) {
    const smallMovieRatio = { minWidth: '170px', minHeight: '100px' }
    const largeMovieRatio = { minWidth: '170px', minHeight: '250px' }
    const posterRatio = isLargeRow ? largeMovieRatio : smallMovieRatio

    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const { setMovie } = useMovieContext()

    return (
        <>
            {displayLoading && isLoading ? (
                <div style={{ paddingRight: '10px' }}>
                    <Skeleton.Button style={posterRatio} active />
                </div>
            ) : null}
            <img
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                style={{
                    ...posterRatio,
                    ...(isLoading && { display: 'none' }),
                    ...(isError && { cursor: 'auto', transform: 'none' }),
                }}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                onClick={() => !isError && setMovie(movie)}
                onLoad={() => {
                    setLoading(false)
                }}
                onError={() => {
                    setLoading(false)
                    setError(true)
                }}
                alt={movie.title}
            />
        </>
    )
}
export default MoviePoster
