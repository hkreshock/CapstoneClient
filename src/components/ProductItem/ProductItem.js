import React, { Component } from "react";
// import Tooltip from "../../MISC/composition/Tooltip";

export default class ProductItem extends Component {
  render() {
    const { item } = this.props;
    console.log(this.props);
    // const ingredientsList = (
    //   <Tooltip color="blue" message={item.ingredientList}>
    //     Ingredients
    //   </Tooltip>
    // );
    return (
      <div className="AllProducts">
        <header className="AllProducts__header">
          <h2 className="AllProducts__heading">{item.title}</h2>
          <h2 className="AllProducts__price">{item.price}</h2>
          <h3 className="AllProducts__content">{item.nutrition}</h3>
        </header>
      </div>
    );
  }
}
