// eslint-disable-next-line
import React, { useState } from 'react';
import axios from 'axios';

import { Response, createCtx, SearchContextType } from '../context/search';

const SearchPageHeader = () => {
  const [show, setShow] = useState('');
  const [useSearchContext] = createCtx<SearchContextType>();
  const { results, setResults } = useSearchContext();

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<Response>('https://show-search-api.herokuapp.com/search', { show });
      setResults(response.data);
      console.log(`results ==> ${JSON.stringify(results, null, 2)}`);
    } catch (error) {
    } finally {
      setShow('');
    }
  };
  return (
    <div className="page-header">
      <div className="content-container form-container">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Enter Show"
            className="text-input"
            value={show}
            onChange={(e) => setShow(e.target.value)}
          />
          <button className="btn" disabled={show === ''}>
            Start Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPageHeader;
