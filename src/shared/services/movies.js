import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "e074371f26d85cdd5e4539421aae2fa2",
  },
});

export const getMovies = async () => {
  const { data } = await instance.get("trending/movie/day");
  return data.results;
};

export const getMovieById = async (id) => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data;
};

export const getMovieBySearch = async (query) => {
  const { data } = await instance.get(`search/movie?query=${query}`);
  return data.results;
};
