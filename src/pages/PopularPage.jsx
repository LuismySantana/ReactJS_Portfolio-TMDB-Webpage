import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { loadPopularFilmsList } from "../utils";
import "../styles/PopularPage.scss"


const PopularPage = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ filmsList, setFilmsList ] = useState({});

    
    useEffect(() => {
        loadPopularFilmsList(setFilmsList, setIsLoading, 1);
        
    }, []);
    
    return (
        <main className="popular_films_page">
            <h1 className="popular_films_title">Most popular films list</h1>

            {isLoading ? 
                <Spinner />
            :
                !filmsList?.results?.length ? (
                    // If filmsList doesn't exists or it's results are empty, we show a message
                    <div className="no_data_warning_container">
                        <h1 className="no_data_warning">No data was found</h1>
                        <h3>Please try again in later</h3>
                    </div>
                ):(
                    // Else we show the movies list
                    <>
                        <div className="films_card_list">
                            {filmsList.results.map(film => (
                                <p 
                                    key={film.id}
                                >
                                    {film.title}
                                </p>
                            ))}
                        </div>
                        <div>Pagination</div>
                    </>
                )
            }
        </main>
    )
}

export default PopularPage;