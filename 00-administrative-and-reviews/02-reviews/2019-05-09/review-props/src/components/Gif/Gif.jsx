import React from 'react';
import './Gif.css';

function Gif(props) {
  return (
    <img src={props.image} />
  );
}

export default Gif;
