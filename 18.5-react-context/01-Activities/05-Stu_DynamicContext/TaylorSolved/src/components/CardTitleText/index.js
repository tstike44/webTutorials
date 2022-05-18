import React from "react";
import UserContext from "../../utils/UserContext";

function CardTitleText(props) {
  return (
    <UserContext.Consumer>
      {({title}) => <h2>{title}</h2>}
    </UserContext.Consumer>
  );
}

export default CardTitleText;
