import React from "react";
import ProduceApiService from "../../services/produce-api-service";
import { Section } from "../../components/Utils/Utils";
import ProductItem from "../ProductItem/ProductItem";

export default class AddItemForm extends React.Component {
  state = {
    readyToSubmit: false,
    products: null
  };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.readyToSubmit === false) {
      this.handleCheckForm(e);
    } else {
      this.handleAddItem(e);
    }
  };

  handleAddItem = e => {
    this.props.onAddItem(
      e.target.itemToAdd.value,
      e.target.quantityToAdd.value
    );
  };

  handleCheckForm = e => {
    e.preventDefault();
    console.log(ProduceApiService.getItems(e.target.itemToAdd.value));
    return ProduceApiService.getItems(e.target.itemToAdd.value).then(data =>
      this.setState({ products: data })
    );
  };

  renderProducts() {
    console.log(this.state.products);
    const itemListById = [];
    const idList = this.state.products.products.map(item => item.id);
    console.log(idList);
    for (let i = 0; i < idList.length; i++) {
      ProduceApiService.getItem(idList[i]).then(data => {
        console.log(data);
        itemListById.push(data);
      });
    }
    console.log(itemListById);
    return itemListById.map(product => (
      <ProductItem key={product.id} item={product} />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            name="itemToAdd"
            type="text"
            placeholder="apples"
            aria-label="Shopping list item"
          />
          <input name="quantityToAdd" type="number" placeholder="0" min="0" />
          <br />
          <button
            onClick={() => this.setState({ readyToSubmit: false })}
            name="submitButton"
          >
            Check For Item
          </button>
          <Section className="ProductList">
            {this.state.products === null ? null : this.renderProducts()}
          </Section>
          <button
            onClick={() => this.setState({ readyToSubmit: true })}
            name="submitButton"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
