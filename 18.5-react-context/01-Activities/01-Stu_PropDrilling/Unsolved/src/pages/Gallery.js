import React, { Component } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      user: {},
      users: [],
      userIndex: 0
    };
  }

  // When the component mounts, a call will be made to get random users.
  componentDidMount() {
    this.loadUsers();
  }

  capitalizeFirstLetter() {
  }

  nextUser() {
    // Ensure that the user index stays within our range of users
  }

  previousUser() {
    // Ensure that the user index stays within our range of users
  }

  handleBtnClick = (event) => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      this.nextUser();
    } else {
      this.previousUser();
    }
  };

  loadUsers = () => {
    API.getLanguagesList()
      .then(languages => {
        return API.getUsersByLanguage(languages[0]).then((users) => {
          this.setState({
            languages: languages,
            users: users,
            user: users[0]
          });
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to LinkedUp</h1>
        <h3 className="text-center">Click on the arrows to browse users</h3>
        <Row>
          <CardContainer />
        </Row>
      </div>
    );
  }
}

export default Gallery;
