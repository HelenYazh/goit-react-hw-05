import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <div className={css.wrapper}>
      {movies !== null && (
        <ul className={css.list}>
          {movies.map((item) => {
            return (
              <li className={css.card} key={item.id}>
                <Link to={`/movies/${item.id}`}>
                  <img
                    className={css.img}
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
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
