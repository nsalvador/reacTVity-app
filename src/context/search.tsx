// eslint-disable-next-line
import React, { useContext } from 'react';

export function createCtx<SearchContextType>() {
  const ctx = React.createContext<SearchContextType | undefined>(undefined);
  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}
