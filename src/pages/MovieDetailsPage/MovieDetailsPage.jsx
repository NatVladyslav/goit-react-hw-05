import css from './MovieDetailsPage.module.css';
import { getMovie } from '../../api/fetchMovies';

import clsx from 'clsx';
import { useState, useEffect, useRef, Suspense } from 'react';
import {
  useLocation,
  useParams,
  Outlet,
  NavLink,
  Link,
} from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Loader from '../../components/Loader/Loader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

const classAdd = ({ active }) => {
  return clsx(css.link, active && css.active);
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    const gethMovieData = async () => {
      setError(null);
      setLoader(true);
      try {
        const { data } = await getMovie(movieId);
        setMovie(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoader(false);
      }
    };
    gethMovieData();
  }, [movieId]);

  return (
    <Section>
      <Container>
        <Link className={css.backLink} to={backLinkRef.current}>
          <IconContext.Provider value={{ color: 'gray', size: 30 }}>
            <IoChevronBackCircleOutline />
          </IconContext.Provider>
          Back
        </Link>
        {loader && <Loader />}
        {error && <NotFoundPage title={error} />}
        {movie && <MovieDetails movie={movie} />}
        {!error && (
          <>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NavLink className={classAdd} to="cast">
                  Cast
                </NavLink>
              </li>
              <li className={css.listItem}>
                <NavLink className={classAdd} to="reviews">
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </>
        )}
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
