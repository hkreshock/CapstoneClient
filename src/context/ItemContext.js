import React, { Component } from "react";

const ItemContext = React.createContext({
  item: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setItem: () => {},
  clearItem: () => {},
  setItems: () => {},
  addItem: () => {}
});

export default ItemContext;

export class ItemProvider extends Component {
  state = {
    item: {},
    error: null
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setItem = item => {
    this.setState({ item });
  };

  clearItem = () => {
    this.setItems([]);
  };

  setItems = items => {
    this.setState({ items });
  };

  addItem = item => {
    this.setItems([...this.state.items, item]);
  };

  render() {
    const value = {
      item: this.state.item,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItem: this.setItem,
      clearItem: this.clearItem,
      setItems: this.setItems,
      addItem: this.addItem
    };
    return (
      <ItemContext.Provider value={value}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}
