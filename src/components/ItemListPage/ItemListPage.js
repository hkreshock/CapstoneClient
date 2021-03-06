import React, { Component } from "react";
import ItemListContext from "../../context/ItemListContext";
import ItemApiService from "../../services/item-api-service";
import { Section } from "../../components/Utils/Utils";
import ItemsListItem from "../../components/ItemsListItem/ItemsListItem";
import AddItemForm from "../../components/AddItemForm/AddItemForm";

export default class ItemListPage extends Component {
  static contextType = ItemListContext;

  componentDidMount() {
    this.context.clearError();
    ItemApiService.getItems()
      .then(data => {
        // eslint-disable-next-line eqeqeq
        return data.filter(item => item.listid == this.props.listId);
      })
      .then(data => this.context.setItemList(data))
      .catch(data => this.context.setError(data));
  }

  renderItems() {
    const { itemList = [] } = this.context;
    return itemList.map(item => <ItemsListItem key={item.id} item={item} />);
  }

  handleAddItem = (itemName, itemQuantity) => {
    const newItem = {
      id: Math.random() * 1000,
      title: itemName,
      quantity: itemQuantity,
      date_created: new Date(),
      listid: this.props.listId
    };
    const newItems = [...this.context.itemList, newItem];
    this.context.setItemList(newItems);
    ItemApiService.addItem(newItem);
  };

  render() {
    const { error } = this.context;
    return (
      <Section className="ItemListPage">
        <section>
          <AddItemForm onAddItem={this.handleAddItem} />
        </section>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderItems()
        )}
      </Section>
    );
  }
}
