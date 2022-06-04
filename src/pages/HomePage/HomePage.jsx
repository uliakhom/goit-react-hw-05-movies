import { useState, useEffect } from "react";
import MoviesList from "modules/MoviesList";
import { getMovies } from "shared/services/movies";

import s from "./homePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies((prevState) => ({ ...prevState, loading: true }));
      try {
        const result = await getMovies();
        setMovies((prevState) => ({
          ...prevState,
          loading: false,
          items: result,
        }));
      } catch (error) {
        setMovies((prevState) => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovies();
  }, []);

  const { items, loading, error } = movies;

  return (
    <div className={s.container}>
      <h2 className={s.title}>Trending today</h2>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      <MoviesList items={items} />
    </div>
  );
};

export default HomePage;
