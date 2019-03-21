import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import "./ItemsListItem.css";
import ItemListContext from "../../context/ItemListContext";
import ItemApiService from "../../services/item-api-service";

export default class ItemListItem extends Component {
  static contextType = ItemListContext;

  handleDeleteItem = item => {
    const newItems = this.context.itemList.filter(itm => itm !== item);
    this.context.setItemList(newItems);
    ItemApiService.deleteItem(item);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="ItemListWholeItem">
        <Link to={`/item/${item.id}`} className="ItemListItem">
          <header className="ItemListItem__header">
            <h2 className="ItemListItem__heading">{item.title}</h2>
            <h2 className="ItemListItem__quantity">{item.quantity}</h2>
            <ItemDate item={item} />
          </header>
        </Link>
        <main>
          <button
            className="deleteButton"
            onClick={e => {
              e.stopPropagation();
              this.handleDeleteItem(item);
            }}
            type="button"
          >
            delete
          </button>
        </main>
      </div>
    );
  }
}

function ItemDate({ item }) {
  return (
    <span className="ItemListItem__date">
      <NiceDate date={item.date_created} />
    </span>
  );
}
