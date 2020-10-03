// eslint-disable-next-line
import React, { useRef } from 'react';
import axios from 'axios';

import { useSearchContext } from '../context/search';
import { Response } from '../types';

const SearchPageHeader = () => {
  const { setResults, setError } = useSearchContext();
  const showRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const show = (showRef.current as HTMLInputElement).value;
      const response = await axios.post<Response>('https://show-search-api.herokuapp.com/search', { show });
      setResults(response.data);
    } catch (error) {
      setError(error.response.data);
    } finally {
      (showRef.current as HTMLInputElement).value = '';
    }
  };

  return (
    <div className="page-header">
      <div className="content-container form-container">
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="Enter Show" className="text-input" ref={showRef} />
          <button type="submit" className="btn">
            Start Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPageHeader;
