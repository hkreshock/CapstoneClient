import React, { Component } from "react";
import ListContext from "../../context/ListContext";
import ListApiService from "../../services/list-api-service";
import { Section } from "../../components/Utils/Utils";
import ListItem from "../../components/ListItem/ListItem";

export default class GroceryLists extends Component {
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

  renderFullList() {
    return this.context.groceryList.map(item => (
      <ListItem key={item.id} item={item} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="ListPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderFullList()
        )}
      </Section>
    );
  }
}
