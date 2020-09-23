// eslint-disable-next-line
import React, { useState } from 'react';

import { Response, SearchContextType, createCtx } from '../context/search';

type Props = {
  children: React.ReactNode;
};

const SearchProvider = ({ children }: Props) => {
  const [, SearchContextProvider] = createCtx<SearchContextType>();
  const [results, setResults] = useState<Response>({ show: '', total_results: 0, results: [] });

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
