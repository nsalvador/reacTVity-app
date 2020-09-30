// eslint-disable-next-line
import React, { useState } from 'react';

import { Props } from '../types';

import { SearchContextProvider } from '../context/search';

const SearchProvider = ({ children }: Props) => {
  const [results, setResults] = useState({});

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
