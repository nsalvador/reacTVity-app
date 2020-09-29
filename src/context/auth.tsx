import { createCtx } from '../functions/context';
import { AuthContextType } from '../types';

export const [useAuthContext, AuthContextProvider] = createCtx<AuthContextType>();
