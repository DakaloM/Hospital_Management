import React from 'react';
import "./search.scss";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <div className='search'>
        <div className="searchContainer">
            <SearchIcon className="icon" />
            <input type="text" placeholder='Search'/>
        </div>
        <button>Search</button>
    </div>
  )
}

export default Search