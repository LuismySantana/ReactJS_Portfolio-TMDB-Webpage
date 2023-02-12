import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { loadFilmById } from "../utils";
import WarningMessage from "../components/WarningMessage";
import "../styles/FilmPage.scss"


const FilmPage = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ filmData, setFilmData ] = useState({});
    const { id } = useParams(); 
    
    useEffect(() => {
        loadFilmById(id, setFilmData, setIsLoading);
        
    }, [])

    // All the logic behind this component render is the same as in PopularPage
    return (
        <main className="film_information_page">
            
            {isLoading ?
            (
                <Spinner /> 

            ):( 
                !filmData || !Object.keys(filmData).length ? 
                (
                    <WarningMessage
                        title="Something wrent wrong"
                        message="Try to search again for your film"
                    />

                ):(
                    <>
                        <p>A film page</p>
                        <p>{id}</p>
                    </>
                )
            )}
        </main>
    )
}

export default FilmPage