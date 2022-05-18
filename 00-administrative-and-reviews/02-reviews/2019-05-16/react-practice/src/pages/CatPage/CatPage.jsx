import React from 'react';
import { Cat, List, Form } from '../../components';

class CatPage extends React.Component {
  state = {
    cats: [
      {
        id: 0,
        name: "Frankie",
        age: 3
      }, {
        id: 1,
        name: "Paprika",
        age: 6
      }
    ],
    currentCatIndex: 0,
    currentId: 2,
    name: "",
    age: 0
  }
  downCat = () => {
    let currentCatIndex = (this.state.currentCatIndex + 1) % this.state.cats.length;
    this.setState({ currentCatIndex });
  }
  upCat = () => {
    let currentCatIndex = (this.state.currentCatIndex - 1 + this.state.cats.length) % this.state.cats.length;
    this.setState({ currentCatIndex })
  }
  handleChange = key => event => {
    this.setState({
      [key]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    const newCat = {
      id: this.state.currentId,
      name: this.state.name,
      age: this.state.age
    }
    this.setState({
      cats: [
        newCat,
        ...this.state.cats
      ],
      currentCatIndex: 0,
      currentId: this.state.currentId + 1,
      name: "",
      age: 0
    })
  }
  render() {
    return (
      <div className="CatPage">
        Current Cat:
        <Cat cat={this.state.cats[this.state.currentCatIndex]} />
        All Cats:
        <List cats={this.state.cats} />
        Create a Cat:
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} name={this.state.name} age={this.state.age} />
        <button onClick={this.downCat} >Down</button>
        <button onClick={this.upCat} >Up</button>
      </div>
    );
  }
}

export default CatPage;
