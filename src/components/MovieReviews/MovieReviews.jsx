import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReview = async () => {
      try {
        const movieReview = await fetchMovieReviews(movieId);
        setReview(movieReview);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    getMovieReview();
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {review !== null && review.length > 0 ? (
        <ul className={css.list}>
          {review.map((item) => {
            return (
              <li className={css.card} key={item.id}>
                <h4 className={css.title}>Author: {item.author}</h4>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default MovieReviews;
