import React, { Component } from "react";

const LoginContext = React.createContext({
  loggedIn: false,
  userLoggedIn: {},
  error: null,
  setError: () => {},
  logIn: () => {},
  logOut: () => {},
  groceryList: [],
  setGroceryLists: () => {},
  List: null,
  setList: () => {}
});
export default LoginContext;

export class LoginProvider extends Component {
  state = {
    loggedIn: false,
    userLoggedIn: {},
    error: null,
    groceryList: [],
    List: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  logIn = user => {
    this.setState({ loggedIn: true, userLoggedIn: user });
  };

  logOut = () => {
    this.setState({ loggedIn: false, userLoggedIn: null });
  };

  setGroceryLists = groceryList => {
    this.setState({ groceryList });
  };

  setList = List => {
    this.setState({ List });
  };

  render() {
    const value = {
      loggedIn: this.state.loggedIn,
      userLoggedIn: this.state.userLoggedIn,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      logIn: this.logIn,
      logOut: this.logOut,
      groceryList: this.state.groceryList,
      setGroceryLists: this.setGroceryLists,
      List: this.state.List,
      setList: this.setList
    };
    return (
      <LoginContext.Provider value={value}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
