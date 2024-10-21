import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.css';

import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MovieDetails = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage.jsx')
);
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));
const Reviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews.jsx')
);
const Cast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
