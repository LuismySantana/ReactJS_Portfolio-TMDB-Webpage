import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { loadPopularFilmsList } from "../utils";
import "../styles/PopularPage.scss"
import "../styles/Pagination.scss"
import MovieCard from "../components/MovieCard";
import ReactPaginate from "react-paginate";

const PopularPage = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ filmsList, setFilmsList ] = useState({});
    const [ page, setPage ] = useState(1);

    
    useEffect(() => {
        loadPopularFilmsList(setFilmsList, setIsLoading, page);
        
    }, [page]);
    

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
            }

            {/* This module works by its own so it's better to place it outside the loading control */}
            <ReactPaginate 
                nextLabel="Next"
                previousLabel="Previous"
                breakLabel=""
                pageCount={filmsList?.results ? 500 : 0} // The API only gives access to the first 500 Popular films pages
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