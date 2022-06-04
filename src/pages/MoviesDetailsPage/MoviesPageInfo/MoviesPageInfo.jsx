import PropTypes from "prop-types";
import noImg from "../../../images/noimage.png";

import s from "./moviesPageInfo.module.css";

const MoviesPageInfo = ({ movie }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;
  const showMovieImage = () => {
    if (!backdrop_path && !poster_path) {
      return noImg;
    } else {
      return `https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`;
    }
  };

  return (
    <>
      <div className={s.container}>
        <img src={showMovieImage()} alt={title} />
        <div className={s.film}>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </>
  );
};

export default MoviesPageInfo;

MoviesPageInfo.defaultProps = {
  movie: {},
};

MoviesPageInfo.propTypes = {
  movie: PropTypes.object,
};
