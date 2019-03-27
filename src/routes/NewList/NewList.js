import React, { Component } from "react";
import ItemListContext from "../../context/ItemListContext";
import ItemApiService from "../../services/item-api-service";
import { Section } from "../../components/Utils/Utils";
import ItemsListItem from "../../components/ItemsListItem/ItemsListItem";
import AddItemForm from "../../components/AddItemForm/AddItemForm";

export default class NewList extends Component {
  static contextType = ItemListContext;

  componentDidMount() {
    this.context.clearError();
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
      listid: 3
    };
    const newItems = [...this.context.itemList, newItem];
    this.context.setItemList(newItems);
    ItemApiService.addItem(newItem);
  };

  render() {
    const { error } = this.context;
    return (
      <div className="NewestList">
        <Section className="NewListPage">
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderItems()
          )}
        </Section>
      </div>
    );
  }
}
