import axios from "axios";

const accesToken = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWQzZTc0MDg2YjRkY2U5YTI3NDQwNTAwNDNlYjkxMSIsIm5iZiI6MTcyOTE3MjUyMi4xNzA3MjIsInN1YiI6IjY3MTExMmY5Y2Y4ZGU4NzdiNDlmYzg4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GBnmVsi41r4iicwAOiRr-xsaCf0dqojTpdbxFaofesw";
axios.defaults.baseURL = "https://api.themoviedb.org/3/trending/movie/";
axios.defaults.params = {
    _language: "en-US",
}
axios.defaults.headers.common["Authorization"] = accesToken;

export async function getFilms() {
    const { data } = await axios.get(`day`);
    console.log(data.results);
  return data;
}
