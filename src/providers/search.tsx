// eslint-disable-next-line
import React, { useState } from 'react';

import { createCtx } from '../functions/context';
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
