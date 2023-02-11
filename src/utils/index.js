import axios from "axios"

async function loadPopularFilmsList(setFilmsList, setIsLoading, page) {
    setIsLoading(true);

    const response = await axios.get(`${import.meta.env.VITE_API_URL}movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`);

    // setTimeout(() => {
        setFilmsList(response.data);
        setIsLoading(false);
        
    // }, 1000); // TODO: Delete timeout
}


export {
    loadPopularFilmsList
}