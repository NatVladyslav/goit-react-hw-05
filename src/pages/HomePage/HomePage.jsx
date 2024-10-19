import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/fetchMovies";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader"
import NotFoundPage from "../NotFoundPage/NotFoundPage";


const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
      <div>
          <h1>Trending today </h1>
        {isLoading && <Loader />}
        {error && <NotFoundPage title={error} />}
        {movies && <MovieList movies={movies} />}
  </div> 
  );
};

export default HomePage;