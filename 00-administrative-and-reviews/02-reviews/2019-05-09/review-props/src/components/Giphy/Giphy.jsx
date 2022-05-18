import React from 'react';
import Gif from '../Gif';
import Search from '../Search';
import './Giphy.css';

function Giphy(props) {
  return (
    <React.Fragment>
      <Search search={props.search} handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
      {!props.loading && props.gifs.map(gif => (
        <Gif key={gif.id} image={gif.images.fixed_width.url} />
      ))}
      {props.loading &&
        <div>Loading...</div>
      }
    </React.Fragment>
  );
}

export default Giphy;
