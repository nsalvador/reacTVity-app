// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import { createCtx } from '../context/search';

import { SearchContextType, Props } from '../types';

const SearchProvider = ({ children }: Props) => {
  const [results, setResults] = useState({});
  const [, SearchContextProvider] = createCtx<SearchContextType>();

  useEffect(() => {
    setResults({});
  }, []);

  return (
    <SearchContextProvider
      value={{
        results,
        setResults,
      }}
    >
      {children}
    </SearchContextProvider>
  );
};

export default SearchProvider;
