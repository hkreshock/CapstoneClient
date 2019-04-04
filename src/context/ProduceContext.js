import React, { Component } from "react";

const ProduceContext = React.createContext({
  products: null,
  itemListById: [],
  setProducts: () => {},
  setItemList: () => {}
});

export default ProduceContext;

export class ProduceProvider extends Component {
  state = {
    products: null,
    itemListById: []
  };

  setItemList = itemList => {
    this.setState({ itemList });
  };

  setProducts = ({ products: data }) => {
    this.setState({ products: data });
  };

  render() {
    const value = {
      products: this.state.products,
      itemListById: this.state.itemListById,
      setProducts: this.setProducts,
      setItemList: this.setItemList
    };
    return (
      <ProduceContext.Provider value={value}>
        {this.props.children}
      </ProduceContext.Provider>
    );
  }
}
