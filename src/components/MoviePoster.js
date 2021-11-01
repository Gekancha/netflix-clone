import { Skeleton } from 'antd'
import { useState } from 'react'

const base_url = 'https://image.tmdb.org/t/p/original/'

function MoviePoster({ movie, isLargeRow, displayLoading }) {
    const smallMovieRatio = { width: '170px', height: '100px' }
    const largeMovieRatio = { width: '170px', height: '250px' }
    const posterRatio = isLargeRow ? largeMovieRatio : smallMovieRatio

    const [isLoading, setLoading] = useState(true)

    return (
        // <div key={key} style={{ display: 'contents' }}>
            <>
                {displayLoading && isLoading ? (
                    <div style={{ paddingRight: '10px' }}>
                        <Skeleton.Button style={posterRatio} active />
                    </div>
                ) : null}
                <img
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    style={
                        isLoading
                            ? { ...posterRatio, display: 'none' }
                            : { ...posterRatio }
                    }
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    onLoad={() => {
                        setLoading(false)
                    }}
                    onError={()=>{
                        setLoading(false)
                    }}
                    alt={movie.title}
                />
            </>
        // </div>
    )
}
export default MoviePoster
