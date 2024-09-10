import { Outlet, useLocation, useParams } from "react-router";
import { fetchMovie } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieDetails = await fetchMovie(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {movie && (
        <div className={css.container}>
          <Link to={goBack.current}>⬅ Go back</Link>
          <div className={css.movieDetails}>
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />

            <div className={css.movieInfo}>
              <h2>{movie.original_title}</h2>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres &&
                  movie.genres.map((genre) => genre.name).join(", ")}
              </p>
            </div>
          </div>

          <div className={css.additionalInfo}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={"cast"}>Cast</Link>
              </li>
              <li>
                <Link to={"reviews"}>Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
