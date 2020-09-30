import { createCtx } from '../functions/context';
import { SearchContextType } from '../types';

export const [useSearchContext, SearchContextProvider] = createCtx<SearchContextType>();
