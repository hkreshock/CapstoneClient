import React, { Component } from "react";

const UserContext = React.createContext({
  loggedIn: false,
  userLoggedIn: {},
  error: null,
  groceryList: [],
  List: null,
  setError: () => {},
  clearError: () => {},
  logIn: () => {},
  logOut: () => {},
  setGroceryLists: () => {},
  setList: () => {}
});
export default UserContext;

export class UserProvider extends Component {
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
      groceryList: this.state.groceryList,
      List: this.state.List,
      setError: this.setError,
      clearError: this.clearError,
      logIn: this.logIn,
      logOut: this.logOut,
      setGroceryLists: this.setGroceryLists,
      setList: this.setList
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
