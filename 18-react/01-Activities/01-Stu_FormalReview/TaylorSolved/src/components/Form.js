import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "tay",
    password: "lor"
  };
  
  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    alert(`Hellow user:${this.state.username} we won't show your password:${this.state.password}, we promise.`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          onChange={this.handleUsernameChange}
          value={this.state.username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={this.handlePasswordChange}
          value={this.state.password}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
