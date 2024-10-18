import './App.css'
import { getFilms } from './apiServices/fetchApi'

import Navigation from './components/Navigation/Navigation';
import NavLink from './components/NavLink/NavLink';

function App() {
  getFilms();
  return (
    <>
      <NavLink />
      <Navigation/>
    </>
  )
}

export default App
