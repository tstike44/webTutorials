import React from 'react';
import { SearchContext } from '../../contexts';
import './Search.css';

class Search extends React.Component {

  render() {
    return (
      <div>
        <SearchContext.Consumer>
          {({search, handleChange, handleSubmit}) =>
        <form onSubmit={handleSubmit}>
          <label>Search:</label>
          <input name="search" type="text" onChange={handleChange} value={search}/>
          <button>Search</button>
        </form>
          }
        </SearchContext.Consumer>
      </div>
    );
  }
}

export default Search;
