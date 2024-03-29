import axios from "axios"

async function loadPopularFilmsList(setFilmsList, setIsLoading, page) {
    try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`);

        setFilmsList(response.data);
        setIsLoading(false);
        
    } catch (error) {
        console.log(error);

        setFilmsList({});
        setIsLoading(false);
    }

}


async function loadFilmById(id, setFilmInfo, setIsLoading) {
    try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_API_URL}movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`);

        setFilmInfo(response.data);
        setIsLoading(false);
        
    } catch (error) {
        console.log(error);

        setFilmInfo({});
        setIsLoading(false);
    }
}




export {
    loadPopularFilmsList,
    loadFilmById
}