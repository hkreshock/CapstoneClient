import React, { Component } from "react";

const UserContext = React.createContext({
  loggedIn: false,
  userLoggedIn: {},
  error: null,
  listId: null,
  setError: () => {},
  logIn: () => {},
  logOut: () => {},
  groceryList: [],
  setGroceryLists: () => {},
  List: null,
  setList: () => {},
  setListId: () => {}
});
export default UserContext;

export class UserProvider extends Component {
  state = {
    loggedIn: false,
    listId: null,
    userLoggedIn: {},
    error: null,
    groceryList: [],
    List: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  setListId = listId => {
    this.setState({ listId: listId });
    console.log(listId);
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
      listId: this.state.listId,
      userLoggedIn: this.state.userLoggedIn,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      logIn: this.logIn,
      logOut: this.logOut,
      groceryList: this.state.groceryList,
      setGroceryLists: this.setGroceryLists,
      List: this.state.List,
      setList: this.setList,
      setListId: this.setListId
    };
    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
