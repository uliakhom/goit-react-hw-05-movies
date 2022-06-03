import { Link } from "react-router-dom";

import s from "./moviesList.module.css";

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title, name }) => (
    <li key={id} className={s.item}>
      <Link to={`/movies/${id}`} className={s.link}>
        {title ?? name}
      </Link>
    </li>
  ));

  return <ul className={s.list}>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
