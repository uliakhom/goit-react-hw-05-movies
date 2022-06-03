import { useState } from "react";
import PropTypes from "prop-types";

import s from "./movieSearchForm.module.css";

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ query: "" });
  };

  return (
    <form action="" onSubmit={handleSubmit} className={s.form}>
      <input
        value={state.query}
        name="query"
        onChange={handleChange}
        type="text"
        className={s.input}
      />
      <button type="button" onClick={handleSubmit} className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
