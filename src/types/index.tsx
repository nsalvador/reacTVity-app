import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import firebase from 'firebase';

export type SearchContextType = {
  results: {};
  setResults: Dispatch<SetStateAction<{}>>;
  error: {};
  setError: Dispatch<SetStateAction<{}>>;
};

export type AuthContextType = {
  user: firebase.User | null;
};

export type Response = {
  show: string;
  total_results: number;
  results: {}[];
};

export type Props = {
  children: JSX.Element;
};

export type AuthType = {
  initializing: boolean;
  user: firebase.User | null;
};

export type FunctionComponentType = {
  component: FunctionComponent;
  path: string;
  exact: boolean;
};
