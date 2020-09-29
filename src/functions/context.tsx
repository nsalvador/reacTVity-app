// eslint-disable-next-line
import React, { useContext } from 'react';

export function createCtx<ContextType>(): readonly [() => ContextType, React.Provider<ContextType | undefined>] {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = () => {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provide with a value');
    return c;
  };
  return [useCtx, ctx.Provider] as const;
}
