import css from './MovieDetails.module.css';

const defaultImg = 'https://geek.hellyer.kiwi/files/2017/06/cat-404.jpg';

const MovieDetails = ({ movie }) => {
  return (
    <div className={css.card}>
      <div className={css.imgDiv}>
        <img
          className={css.img}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt={movie.title}
          width={300}
        />
      </div>
      <div className={css.text}>
        <h2 className={css.title}>{movie.title}</h2>
        <p className={css.score}>User Score: {movie.vote_count}</p>
        <h3 className={css.subtitle}>Overview</h3>
        <p className={css.overview}>{movie.overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <ul className={css.movieGenres}>
          {movie.genres.map(({ id, name }) => (
            <li className={css.genre} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
