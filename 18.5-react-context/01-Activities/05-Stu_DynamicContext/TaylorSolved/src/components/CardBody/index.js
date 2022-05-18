import React from 'react';
import UserContext from '../../utils/UserContext';

function CardBody(props) {
  return (
    <UserContext.Consumer>
      {({ language, email }) => (
        <div>
          <h4>
          Favorite language: {language}
          </h4>
          <h4>
          Email: {email}
          </h4>
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default CardBody;
