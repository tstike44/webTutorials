import React from 'react';
import Giphy from './components/Giphy';
import { SearchContext } from './contexts';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    search: "kittens",
    gifs: [],
    loading: true
  };

  search = () => {
  axios.get("http://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/search?q="
    + this.state.search + "&api_key=VySk58gwMa51o1FHQqT0RGa4Sj3A9uDR&limit=10").then(({ data }) => {
      this.setState({
        gifs: data.data,
        loading: false
      });
      console.log(data.data);
    })
}

handleChange = (event) => {
  const search = event.target.value;
  this.setState({
    search
  })
}

handleSubmit = (event) => {
  event.preventDefault();
  this.search();
}

componentDidMount() {
  this.search();
}

  render() {
    return (
      <div className="App">
        <SearchContext.Provider value={{
          search: this.state.search,
          gifs: this.state.gifs,
          loading: this.state.loading,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit
        }}>
          <Giphy />
        </SearchContext.Provider>
      </div>
    );
  }
}

export default App;
