import * as React from "react";
import Home from "./pages/Home";
import AlertContext from "./components/AlertContext";

class App extends React.Component {
  state = {
    display: false,
    theme: "success",
    onClick: (theme, display) => {
      this.setState({ theme, display });
    }
  };
  render() {
    // App component that provides initial context values
    // Here we are overwritting the context object to be equal to the state of App
    return (
      <AlertContext.Provider value={this.state}>
        <Home />
      </AlertContext.Provider>
    );
  }
}

export default App;
