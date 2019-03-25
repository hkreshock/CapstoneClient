import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import ListContext from "../../context/ListContext";
import ListApiService from "../../services/list-api-service";
import "./ListItem.css";

export default class ListItem extends Component {
  static contextType = ListContext;

  handleDeleteItem = list => {
    const newLists = this.context.groceryList.filter(itm => itm !== list);
    this.context.setGroceryLists(newLists);
    ListApiService.deleteList(list);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="AllLists">
        <Link to={`/list/${item.id}`} className="ListById">
          <header className="ListById__header">
            <h2 className="ListById__heading">{item.title}</h2>
            <ListDate item={item} />
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

function ListDate({ item }) {
  return (
    <span className="List__date">
      <NiceDate date={item.date_created} />
    </span>
  );
}
