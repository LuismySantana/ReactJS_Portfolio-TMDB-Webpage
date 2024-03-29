import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { loadFilmById } from "../utils";
import WarningMessage from "../components/WarningMessage";
import "../styles/FilmPage.scss"
import "../styles/CircularProgressbar.scss"
import { CircularProgressbar } from "react-circular-progressbar";


// FilmPage will be the biggest component as it is a full page of different sections of content
const FilmPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [filmData, setFilmData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        loadFilmById(id, setFilmData, setIsLoading);

    }, [])


    // Funtion to format the money amounts of the API response
    function formatMoney(amount) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(amount);
    }

    // Same as formatMoney but for timing
    function formatTime(time) {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;

        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
    }


    // All the logic behind this component render is the same as in PopularPage | The structure of the page will be: Heading, Genres, Overview, Aditional information and Redirection buttons
    return (
        <main className="film_info_page">

            {isLoading ?
                (
                    <Spinner />

                ):(
                    !filmData || !Object.keys(filmData).length ?
                        (
                            <WarningMessage
                                title="Something went wrong"
                                message="Try to search again for your film"
                            />

                        ):(
                            <div className="film_info_container">
                                <div className="film_info_header" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${filmData.backdrop_path})` }}>
                                    <div className="header_content">{filmData.title}</div>
                                </div>

                                <section className="film_genres">
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
                                </section>

                                <section className="film_overview">
                                    <h2>{filmData.tagline ? filmData.tagline : "Overview"}</h2>
                                    <p>{filmData.overview}</p>
                                </section>

                                <section className="film_aditional_info_container">
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
                                </section>

                                <section className="buttons_container">
                                    <a href={`https://www.themoviedb.org/movie/${filmData.id}`} target="_blank">
                                        <button 
                                            type="button"
                                            className="button TMDB"
                                        >
                                            <img src="/TMDB_logo_short.svg" alt="Go to TMDB" />
                                        </button>
                                    </a>                                    
                                    
                                    <a href={`https://www.imdb.com/title/${filmData.imdb_id}`} target="_blank">
                                        <button 
                                            type="button"
                                            className="button IMDb"
                                        >
                                            <img src="/IMDb_logo.png" alt="Go to IMDb" />
                                        </button>
                                    </a>

                                    {filmData.homepage && (
                                        <a href={filmData.homepage} target="_blank">
                                            <button 
                                                type="button"
                                                className="button homepage"
                                            >
                                                Homepage
                                            </button>
                                        </a>
                                    )}
                                </section>
                            </div>
                        )
                )}
        </main>
    )
}

export default FilmPage;