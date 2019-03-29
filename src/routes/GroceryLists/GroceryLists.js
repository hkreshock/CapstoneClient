import React, { Component } from "react";
import ListApiService from "../../services/list-api-service";
import { Section } from "../../components/Utils/Utils";
import ListItem from "../../components/ListItem/ListItem";
import UserContext from "../../context/UserContext";

export default class GroceryLists extends Component {
  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError();
    ListApiService.getLists()
      .then(data => {
        return data.filter(
          list => list.userid === this.context.userLoggedIn.id
        );
      })
      .then(data => this.context.setGroceryLists(data));
    return ListApiService.getLists().catch(data => {
      this.context.setError(data);
    });
  }

  renderFullList() {
    return this.context.groceryList.map(item => (
      <ListItem key={item.id} item={item} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <Section className="ListPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderFullList()
        )}
      </Section>
    );
  }
}
