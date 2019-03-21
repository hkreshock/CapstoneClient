import React, { Component } from "react";

const ListContext = React.createContext({
  groceryLists: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setGroceryLists: () => {}
});
export default ListContext;

export class ListProvider extends Component {
  state = {
    groceryList: [],
    error: null
  };

  setGroceryLists = groceryList => {
    this.setState({ groceryList });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      groceryList: this.state.groceryList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setGroceryLists: this.setGroceryLists
    };
    return (
      <ListContext.Provider value={value}>
        {this.props.children}
      </ListContext.Provider>
    );
  }
}
