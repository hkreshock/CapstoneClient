import React from "react";

export default class AddItemForm extends React.Component {
  onSubmitForm = e => {
    e.preventDefault();
    // e.target['inputName'] references `<input name='inputName' />`
    this.props.onAddItem(
      e.target.itemToAdd.value,
      e.target.quantityToAdd.value
    );
  };
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          name="itemToAdd"
          type="text"
          placeholder="apples"
          aria-label="Shopping list item"
        />
        <input name="quantityToAdd" type="number" placeholder="0" min="0" />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
