import React from 'react'
import { useMyListContext } from '../contexts/MyListProvider'

function MyList() {
    const { myMovieList, removeFromMyList } = useMyListContext()
    return (
        <div className="home_screen">{myMovieList.map((movie) => movie.name)}</div>
    )
}

export default MyList
