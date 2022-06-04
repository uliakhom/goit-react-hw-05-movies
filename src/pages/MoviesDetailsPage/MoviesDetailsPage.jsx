import { useState, useEffect } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

import MoviesPageInfo from "./MoviesPageInfo";
import GoBackButton from "shared/components/GoBackButton";

import { getMovieById } from "../../shared/services/movies";
import s from "./moviesDetailsPage.module.css";

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState({
    details: null,
    loading: false,
    error: null,
  });
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setMovie((prevState) => ({ ...prevState, loading: true }));
        const result = await getMovieById(id);
        setMovie((prevState) => ({
          ...prevState,
          details: result,
          loading: false,
        }));
      } catch (error) {
        setMovie((prevState) => ({
          ...prevState,
          error: error.message,
          loading: false,
        }));
      }
    };
    fetchMovie();
  }, [id]);

  const { details, loading, error } = movie;

  return (
    <>
      <GoBackButton />
      {loading && <p>...loading</p>}
      {error && (
        <p>
          Sorry, we don't have info about this film. Please, try again later 🖤
        </p>
      )}
      {details && <MoviesPageInfo movie={details} />}
      <Link state={location.state} to="cast" className={s.link}>
        Cast
      </Link>
      <Link state={location.state} to="reviews" className={s.link}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default MoviesDetailsPage;
