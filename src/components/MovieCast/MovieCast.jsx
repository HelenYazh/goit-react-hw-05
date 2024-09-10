import { fetchMovieCast } from "../../movies-api";

const MovieCast = () => {
  fetchMovieCast();

  return <div>MovieCast</div>;
};

export default MovieCast;
