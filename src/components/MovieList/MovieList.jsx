import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.listItem} key={id}>
          <Link state={location} className={css.itemLink} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
