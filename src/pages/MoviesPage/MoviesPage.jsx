import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { requestMoviesBySearchValue } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const fetchMoviesBySearchValue = async () => {
      try {
        setLoading(true);
        if (query) {
          const movie = await requestMoviesBySearchValue(query);
          setMovies(movie);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesBySearchValue();
  }, [query]);

  const onSearch = (searchTerm) => {
    setSearchParams({
      query: searchTerm,
    });
  };

  return (
    <>
      <SearchForm defaultSearchValue={query} onSearch={onSearch} />
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {!loading && !error && movies.length === 0 && query && (
        <h3>No movies found for &quot;{query}&quot;</h3>
      )}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
