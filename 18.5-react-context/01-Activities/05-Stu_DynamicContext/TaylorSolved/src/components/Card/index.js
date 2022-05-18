import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import UserContext from "../../utils/UserContext";
import "./style.css";

function Card(props) {
  return (
    <UserContext.Consumer>
      {({image, handleBtnClick}) => (
        <div>
          <CardHeading />
          <CardImg image={image} />
          <CardBody />
          {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
          <CardBtn
            style={{ opacity: image ? 1 : 0 }}
            onClick={handleBtnClick}
            data-value="back"
          />
          <CardBtn
            style={{ opacity: image ? 1 : 0 }}
            onClick={handleBtnClick}
            data-value="next"
          />
        </div>
      )}
    </UserContext.Consumer>
  );
}

export default Card;
