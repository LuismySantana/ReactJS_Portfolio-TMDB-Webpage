import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { loadPopularFilmsList } from "../utils";
import "../styles/PopularPage.scss"


const PopularPage = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ filmsList, setFilmsList ] = useState([]);

    
    useEffect(() => {
        loadPopularFilmsList(setFilmsList, setIsLoading, 1);
        
    }, []);


    return (
        <main className="popular_films_page">
            <h1 className="popular_films_title">Most popular films list</h1>
            {isLoading ? 
                <Spinner />
            :
                !filmsList ? (
                    <div className="no_data_warning_container">
                        <h1 className="no_data_warning">No data was found</h1>
                        <h3>Please try again in later</h3>
                    </div>
                ):(
                    <p>The is data</p>
                )
            }
        </main>
    )
}

export default PopularPage;