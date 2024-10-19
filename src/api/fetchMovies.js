import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    _language: "en-US"
  },
  headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQzZTc0MDg2YjRkY2U5YTI3NDQwNTAwNDNlYjkxMSIsIm5iZiI6MTcyOTE3MjUyMi4xNzA3MjIsInN1YiI6IjY3MTExMmY5Y2Y4ZGU4NzdiNDlmYzg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GBnmVsi41r4iicwAOiRr-xsaCf0dqojTpdbxFaofesw"}
});


export const getTrendingMovies = async () => {
  const data = await instance.get("trending/movie/day");
  return data;
};

export const getMovies = async (query = "") => {
  const data = await instance.get("search/movie", {
    params: { query, include_adult: false },
  });
  return data;
};

export const getMovie = async (id) => {
  const data = await instance.get(`movie/${id}`);
  return data;
};

export const getCredits = async (id) => {
  const data = await instance.get(`movie/${id}/credits`);
  return data;
};

export const getReviews = async (id, page = 1) => {
  const data = await instance.get(`movie/${id}/reviews`, { params: { page } });
  return data;
};
