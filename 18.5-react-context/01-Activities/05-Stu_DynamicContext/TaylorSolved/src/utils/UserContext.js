import React from "react";
// default context object with properties corresponding to Provider values

// title={this.capitalizeFirstLetter(this.state.user.firstname) +
//     " " + this.capitalizeFirstLetter(this.state.user.lastname)}
// image={this.state.user.image}
// language={this.state.user.language}
// email={this.state.user.email}
// handleBtnClick={this.handleBtnClick}
const UserContext = React.createContext({
  title: "",
  img: "",
  language: "",
  email: "",
  handleBtnClick: () => undefined
});

export default UserContext;