/* eslint-disable react/prop-types */
import React from 'react';
import './_searchFilter.scss';

const Search = ({ setSearch, setPage }) => {
  return (
    <div className="searchBar">
      <form>
        <input
          className="input-search"
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Buscar personaje"
        />
      </form>
    </div>
  );
};

export default Search;
