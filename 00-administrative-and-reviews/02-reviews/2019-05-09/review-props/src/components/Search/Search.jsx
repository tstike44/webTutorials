import React from 'react';
import './Search.css';

function Search(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Search:</label>
        <input name="search" type="text" onChange={props.handleChange} value={props.search}/>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
