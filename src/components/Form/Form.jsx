import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import css from './Form.module.css';

const notification = () =>
  toast('Please, enter film`s name', { position: 'top-center' });

const Form = ({ getSearchQuery, prevValue }) => {
  const [query, setQuery] = useState(prevValue ?? '');

  const handleSubmit = e => {
    e.preventDefault();
    const inputQuery = query.trim();
    if (!inputQuery) {
      notification();
      return;
    }

    getSearchQuery(inputQuery);
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          value={query}
          onChange={e => setQuery(e.target.value)}
          type="text"
          name="query"
          placeholder="Enter film's name ..."
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default Form;
