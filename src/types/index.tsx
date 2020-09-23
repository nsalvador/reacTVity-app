import { Dispatch, SetStateAction } from 'react';

export type SearchContextType = {
  results: {};
  setResults: Dispatch<SetStateAction<{}>>;
};

export type Response = {
  show: string;
  total_results: number;
  results: {}[];
};

export type Props = {
  children: JSX.Element;
};
