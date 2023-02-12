import { useEffect, useState } from "react";
import { loadPopularFilmsList } from "../utils";
import ReactPaginate from "react-paginate";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";
import "../styles/PopularPage.scss"
import "../styles/Pagination.scss"
import WarningMessage from "../components/WarningMessage";


const PopularPage = () => {
    // States for pagination, films data and loading animation
    const [ isLoading, setIsLoading ] = useState(false);
    const [ filmsList, setFilmsList ] = useState({});
    const [ page, setPage ] = useState(1);

    
    // Each time the page is changed, update the list
    useEffect(() => {
        loadPopularFilmsList(setFilmsList, setIsLoading, page);
        
    }, [page]);
    

    return (
        <main className="popular_films_page">
            <h1 className="popular_films_title">Most popular films list</h1>

            {isLoading ?
            (
                // If it's loading, we show the spinner
                <Spinner />

            ):(
                !filmsList?.results?.length ? 
                (
                    // If filmsList doesn't exists or it's results are empty, we show a message
                    <WarningMessage
                        title="No data was found"
                        message="Please try again later"
                    />
                    
                ):(
                    // Else we show the movies list
                    <div className="films_card_list">
                        {filmsList.results.map(film => {
                            const { id, title, release_date, poster_path, popularity } = film;
                            
                            return <MovieCard
                                key={id}
                                id={id}
                                title={title}
                                release={release_date}
                                popularity={popularity}
                                imagePath={poster_path}
                            />
                        })}
                    </div>
                )
            )}

            {/* This module works by its own so it's better to place it outside the loading control */}
            <ReactPaginate 
                nextLabel="&#9654;"
                previousLabel="&#9664;"
                breakLabel=""
                pageCount={filmsList?.results?.length ? 500 : 0} // The API only gives access to the first 500 Popular films pages
                onPageChange={e => setPage(Number(e.selected)+1)}
                containerClassName="pagination_container"
                pageLinkClassName="pagination_button"
                previousLinkClassName="pagination_button margin"
                nextLinkClassName="pagination_button margin"
                activeClassName="active"
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                renderOnZeroPageCount={null}
            />
        </main>
    )
}

export default PopularPage;