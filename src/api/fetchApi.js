import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/',
  params: {
    _language: "en-US"
  },
  headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQzZTc0MDg2YjRkY2U5YTI3NDQwNTAwNDNlYjkxMSIsIm5iZiI6MTcyOTE3MjUyMi4xNzA3MjIsInN1YiI6IjY3MTExMmY5Y2Y4ZGU4NzdiNDlmYzg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GBnmVsi41r4iicwAOiRr-xsaCf0dqojTpdbxFaofesw"}
});

export async function getFilms() {
    const { data } = await instance.get(`day`);
    console.log(data.results);
  return data;
}
