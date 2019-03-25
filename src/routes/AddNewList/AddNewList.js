import React, { Component } from "react";
import ListContext from "../../context/ListContext";
import ListApiService from "../../services/list-api-service";

export default class AddNewList extends Component {
  static contextType = ListContext;

  componentDidMount() {
    this.context.clearError();
    console.log(ListApiService.getLists());
    ListApiService.getLists()
      .then(data => {
        this.context.setGroceryLists(data);
      })
      .catch(data => {
        this.context.setError(data);
      });
  }

  onSubmitForm = e => {
    e.preventDefault();
    const newList = {
      title: e.target.newListTitle.value
    };
    // e.target['inputName'] references `<input name='inputName' />`
    ListApiService.getLists().then(data => {
      this.context.setGroceryLists(newList, data);
    });
    ListApiService.addList(newList);
    window.location.pathname = "/newList";
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <h2>Give your new list a name!</h2>
        <input
          name="newListTitle"
          type="text"
          placeholder="Dinners for the week"
          required
        />
        <button type="submit">Add Title</button>
      </form>
    );
  }
}
