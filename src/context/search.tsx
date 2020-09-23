import React, { Dispatch, SetStateAction, useContext } from 'react';

export type Response = {
  show: string;
  total_results: number;
  results: {}[];
};

export type SearchContextType = {
  results: Response;
  setResults: Dispatch<SetStateAction<Response>>;
};

export function createCtx<SearchContextType>() {
  const ctx = React.createContext<SearchContextType | undefined>(undefined);
  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}
