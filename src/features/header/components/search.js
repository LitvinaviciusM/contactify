import React from 'react';
import Input from '../../../components/input';

const Search = () => (
  <section className="header__search">
    <Input
      name="search"
      type="text"
      placeholder="Search"
      icon="search"
      variant="search"
    />
  </section>
);

export default Search;
