import React, { Component } from "react";
import UserContext from "../../context/UserContext";
import ListApiService from "../../services/list-api-service";

export default class AddNewList extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };
  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError();
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
      title: e.target.newListTitle.value,
      userid: this.context.userLoggedIn.id
    };
    ListApiService.getLists().then(data => {
      this.context.setGroceryLists([...data, newList]);
    });
    ListApiService.addList(newList);
    ListApiService.getLists()
      .then(data => {
        return data.filter(list => list.userid === newList.userid);
      })
      .then(data => {
        return data.find(list => list.title === newList.title);
      })
      .then(list => {
        return list.id;
      })
      .then(id => this.props.history.push(`/list/${id}`));
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
