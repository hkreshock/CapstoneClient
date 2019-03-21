import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import ListContext from "../../context/ListContext";
import GroceryLists from "../../components/GroceryLists/GroceryLists";

export default class Lists extends Component {
  static contextType = ListContext;

  renderLists() {
    const { Lists = [] } = this.context;
    return Lists.map(List => <GroceryLists key={List.id} item={List} />);
  }

  render() {
    const { error } = this.context;
    return (
      <Section>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderLists()
        )}
        ()
      </Section>
    );
  }
}
