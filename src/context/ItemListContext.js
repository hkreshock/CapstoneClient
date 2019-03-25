import React, { Component } from "react";

const ItemListContext = React.createContext({
  itemList: [],
  listTitle: "",
  error: null,
  setError: () => {},
  clearError: () => {},
  setItemList: () => {}
});
export default ItemListContext;

export class ItemListProvider extends Component {
  state = {
    itemList: [],
    error: null
  };

  setItemList = itemList => {
    this.setState({ itemList });
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
      itemList: this.state.itemList,
      listTitle: this.state.listTitle,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItemList: this.setItemList
    };
    return (
      <ItemListContext.Provider value={value}>
        {this.props.children}
      </ItemListContext.Provider>
    );
  }
}
