import React, { Component } from "react";

const ItemListContext = React.createContext({
  itemList: [],
  listId: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setItemList: () => {},
  setListId: () => {}
});
export default ItemListContext;

export class ItemListProvider extends Component {
  state = {
    itemList: [],
    listId: null,
    error: null
  };

  setListId = listId => {
    this.setState({ listId });
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
      listId: this.state.listId,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setItemList: this.setItemList,
      setListId: this.setListId
    };
    return (
      <ItemListContext.Provider value={value}>
        {this.props.children}
      </ItemListContext.Provider>
    );
  }
}
