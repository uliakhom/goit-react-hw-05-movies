import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieReviews } from "shared/services/movies";
import s from "./reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setReviews((prevState) => ({ ...prevState, loading: true }));
        const result = await getMovieReviews(id);
        setReviews((prevState) => ({
          ...prevState,
          items: result.results,
          loading: false,
        }));
      } catch (error) {
        setReviews((prevState) => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchCast();
  }, [id]);

  const elements = reviews.items.map((item) => (
    <li key={item.id}>
      <p className={s.author}>Author: {item.author}</p>
      <p>{item.content}</p>
    </li>
  ));

  const { loading, error } = reviews;

  return (
    <div className={s.container}>
      {loading && <p>...loading</p>}
      {error && (
        <p>
          Sorry, we don't have info about this film. Please, try again later 🖤
        </p>
      )}

      <h3 className={s.title}>Reviews</h3>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
};

export default Reviews;
