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

  setItems = items => {
    this.setState({ items });
  };

  clearItem = () => {
    this.setItems([]);
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
      setItems: this.setItems,
      clearItem: this.clearItem,
      addItem: this.addItem
    };
    return (
      <ItemContext.Provider value={value}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}
