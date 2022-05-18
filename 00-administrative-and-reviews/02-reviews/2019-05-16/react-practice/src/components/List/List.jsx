import React from 'react';
import Cat from '../Cat';

function List(props) {
  return (
    <div className="List">
      {props.cats.map(cat => (
          <Cat cat={cat} key={cat.id} />
      ))}
    </div>
  );
}

export default List;
