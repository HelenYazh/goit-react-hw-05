import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDFhZTRiODFjYzZmNjAwMzkxYjE5MjY1OGJiYzI0MSIsIm5iZiI6MTcyNTMwMjQ0Ni44NDYyOTYsInN1YiI6IjY2ZDYwNDZjZThlNWVjZGVjNTliODc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PvKn4GL5zmPzMTksyfnY7pr_8hJv9KH3JE-ERIQOBrs"
axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`

export const fetchTrendingMovies = async () => {
    const response = await axios.get("/trending/movie/day")
    console.log(response);

    return response.data.results;
} 