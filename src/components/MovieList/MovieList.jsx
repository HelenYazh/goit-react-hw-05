import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.wrapper}>
      {movies !== null && (
        <ul className={css.list}>
          {movies.map((item) => {
            return (
              <li className={css.card} key={item.id}>
                <Link state={{ from: location }} to={`/movies/${item.id}`}>
                  <img
                    className={css.img}
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                  <h3 className={css.title}>{item.title}</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieList;
