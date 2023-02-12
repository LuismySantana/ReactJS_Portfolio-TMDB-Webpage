import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { loadFilmById } from "../utils";
import WarningMessage from "../components/WarningMessage";
import "../styles/FilmPage.scss"
import "../styles/CircularProgressbar.scss"
import { CircularProgressbar } from "react-circular-progressbar";


const FilmPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [filmData, setFilmData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        loadFilmById(id, setFilmData, setIsLoading);

    }, [])


    function formatMoney(amount) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(amount);
    }

    function formatTime(time) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;

        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
    }


    console.log(filmData) // TODO: Remove

    // All the logic behind this component render is the same as in PopularPage
    return (
        <main className="film_info_page">

            {isLoading ?
                (
                    <Spinner />

                ) : (
                    !filmData || !Object.keys(filmData).length ?
                        (
                            <WarningMessage
                                title="Something went wrong"
                                message="Try to search again for your film"
                            />

                        ) : (
                            <div className="film_info_container">
                                <div className="film_info_header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${filmData.backdrop_path})` }}>
                                    <div className="header_content">{filmData.title}</div>
                                </div>

                                <div className="film_genres">
                                    <span className="label">Genres:</span>

                                    <div className="genres_list">
                                        {filmData.genres.map(genre => (
                                            <span
                                                className="genre_tag"
                                                key={genre.id}
                                            >
                                                {genre.name}
                                            </span>
                                        ))}
                                        {filmData.adult && <img className="adult_film_warning" src="/18_age_restriction.png" alt="Movie +18" />}
                                    </div>
                                </div>

                                <div className="film_overview">
                                    <h2>{filmData.tagline ? filmData.tagline : "Overview"}</h2>
                                    <p>{filmData.overview}</p>
                                </div>

                                <div className="film_aditional_info_container">
                                    <div className="film_poster_container">
                                        <h3>Original poster:</h3>
                                        <img className="film_poster" src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`} alt="Original poster" />
                                    </div>

                                    <div className="film_aditional_info">
                                        <div className="info_tag">
                                            <h3>Release date:</h3>
                                            <p>{filmData.release_date}</p>
                                        </div>
                                        <div className="info_tag">
                                            <h3>Runtime:</h3>
                                            <p>{formatTime(filmData.runtime)}</p>
                                        </div>
                                        <div className="info_tag">
                                            <h3>Budget:</h3>
                                            <p>{formatMoney(filmData.budget)}</p>
                                        </div>
                                        <div className="info_tag">
                                            <h3>Revenue:</h3>
                                            <p>{formatMoney(filmData.revenue)}</p>
                                        </div>
                                    </div>

                                    <div className="valorations_container">
                                        
                                        <h3>User score:</h3>
                                        <CircularProgressbar
                                            className="user_score_bar"
                                            value={filmData.vote_average*10}
                                            text={`${Math.round(filmData.vote_average*100) / 10}%`}
                                            strokeWidth={6}
                                        />
                                        
                                        <div className="spacer"></div>


                                        <div className="card_popularity">
                                            <span className="heading">Popularity</span> 
                                            <span className="content">{filmData.popularity}</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="buttons_container">
                                    <h1>Buttons</h1>
                                </div>

                            </div>
                        )
                )}
        </main>
    )
}

export default FilmPage


/* 
? backdrop_path 
? adult: Pin +18 en la tarjeta
? genres: tarjetitas de texto con padding de colores estilo titulo de tarjetas
? 
? 
? boton redirect a IMDB y TMDB de la peli

? En idea: Budget / logo productoras
*/