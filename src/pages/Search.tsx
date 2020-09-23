// eslint-disable-next-line
import React, { FunctionComponent } from 'react';

import Layout from '../components/Layout';
import SearchProvider from '../providers/search';
import SearchPageHeader from '../components/SearchPageHeader';

const Search: FunctionComponent = () => {
  return (
    <Layout>
      <SearchProvider>
        <SearchPageHeader />
      </SearchProvider>
    </Layout>
  );
};

export default Search;
