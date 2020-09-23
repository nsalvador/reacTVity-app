// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

import { createCtx } from '../context/search';

import { SearchContextType, Props } from '../types';

export const [useSearchContext, SearchContextProvider] = createCtx<SearchContextType>();

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
