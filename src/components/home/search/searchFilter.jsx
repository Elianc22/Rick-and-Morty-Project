import React from 'react';
import { useGlobalState } from '../../context/contextApi';
import './_searchFilter.scss';

const Search = () => {
  const { setSearch, setPage } = useGlobalState();

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
          placeholder="Search Character"
        />
      </form>
    </div>
  );
};

export default Search;
