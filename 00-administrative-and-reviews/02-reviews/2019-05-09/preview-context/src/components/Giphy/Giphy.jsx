import React from 'react';
import Gif from '../Gif';
import Search from '../Search';
import { SearchContext } from '../../contexts';
import './Giphy.css';

function Giphy(props) {
  return (
      <SearchContext.Consumer>
        {({gifs, loading}) => (
          <React.Fragment>
          <Search />
          {!loading && gifs.map(gif => (
            <Gif key={gif.id} image={gif.images.fixed_width.url} />
          ))}
          {loading &&
            <div>Loading...</div>
          }
          </React.Fragment>
        )
        }
      </SearchContext.Consumer>
  );
}

export default Giphy;
