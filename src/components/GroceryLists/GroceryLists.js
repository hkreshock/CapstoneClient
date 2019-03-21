import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NiceDate } from "../Utils/Utils";
import ListContext from "../../context/ListContext";
import ListApiService from "../../services/list-api-service";

export default class GroceryLists extends Component {
  static contextType = ListContext;

  handleDeleteItem = list => {
    const newLists = this.context.groceryList.filter(itm => itm !== list);
    this.context.setGroceryLists(newLists);
    ListApiService.deleteList(list);
  };

  render() {
    const { list } = this.props;
    return (
      <div className="AllLists">
        <Link to={`/list/${list.id}`} className="ListById">
          <header className="ListById__header">
            <h2 className="ListById__heading">{list.title}</h2>
            <ListDate item={list} />
          </header>
        </Link>
        <main>
          <button
            className="deleteButton"
            onClick={e => {
              e.stopPropagation();
              this.handleDeleteItem(list);
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

function ListDate({ list }) {
  return (
    <span className="List__date">
      <NiceDate date={list.date_created} />
    </span>
  );
}
