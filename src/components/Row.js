import React, {useState, useEffect} from 'react'
import axios, * as others from 'axios';
import './Row.css';
import Youtube from "react-youtube";


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovie] = useState([]) ;


    useEffect(() => {

        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            // console.log(requests.data.results);
            setMovie(requests.data.results)
            return requests;

        }
        fetchData();
    }, [fetchUrl]); // [] run once when row load and dont run it again

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                ))}

            </div>

        </div>
    )
}

export default Row
