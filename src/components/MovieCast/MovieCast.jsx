import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../movies-api";
import { useParams } from "react-router";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {cast !== null && cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map((item) => {
            return (
              <li className={css.card} key={item.id}>
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                />
                <h3 className={css.title}>{item.name}</h3>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No cast available.</p>
      )}
    </div>
  );
};

export default MovieCast;
