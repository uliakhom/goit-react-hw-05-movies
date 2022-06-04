import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "modules/MoviesList";
import MovieSearchForm from "modules/MovieSearchForm";

import { getMovieBySearch } from "shared/services/movies";

const MoviesPage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      setMovies((prevState) => ({ ...prevState, loading: true }));
      try {
        const result = await getMovieBySearch(query);
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
    if (query) {
      fetchMovies();
    }
  }, [query]);

  const onSubmit = ({ query }) => setSearchParams({ query });

  return (
    <>
      <MovieSearchForm onSubmit={onSubmit} />
      <MoviesList items={movies.items} />
    </>
  );
};

export default MoviesPage;
