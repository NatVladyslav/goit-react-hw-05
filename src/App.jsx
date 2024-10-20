import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation/Navigation';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/movies" element={<MoviesPage />}>
          Movies
        </Route>
      </Routes>
    </>
  );
}

export default App;
