import React from 'react'
import Row from '../components/Row'
import request from '../request'
import Banner from '../header/Banner'
import './HomeScreen.css'
import Login from '../header/Navbar/loginV2'

function HomeScreen() {
    return (
        <div className="home_screen">
            <Login />

            {/* <Nav/> */}
            <Banner />
            <div className="content">
                <Row
                    title="NETFLIX ORIGINALS"
                    fetchUrl={request.fetchNetflixOriginals}
                    isLargeRow={true}
                />
                <Row title="Trending Now" fetchUrl={request.fetchTrending} />
                <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
                <Row
                    title="Action Movies"
                    fetchUrl={request.fetchActionMovies}
                />
                <Row
                    title="Comedy Movie"
                    fetchUrl={request.fetchComedyMovies}
                />
                <Row
                    title="Horror Movie"
                    fetchUrl={request.fetchHorrorMovies}
                />
                <Row
                    title="Romance Movie"
                    fetchUrl={request.fetchRomanceMovies}
                />
                <Row
                    title="Documentaries"
                    fetchUrl={request.fetchDocumentaries}
                />
            </div>
        </div>
    )
}

export default HomeScreen
