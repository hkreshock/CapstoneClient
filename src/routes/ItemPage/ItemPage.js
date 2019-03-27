import React, { Component } from "react";
import ItemApiService from "../../services/item-api-service";
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils";
import "./ItemPage.css";
import ItemContext from "../../context/ItemContext";

export default class ItemPage extends Component {
  static contextType = ItemContext;

  componentDidMount() {
    const { itemId } = this.props.match.params;
    this.context.clearError();
    ItemApiService.getItem(itemId)
      .then(this.context.setItem)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearItem();
  }

  renderItem() {
    const { item, quantity } = this.context;
    return (
      <>
        <h2>{item.title}</h2>
        <p>
          <Hyph />
          <NiceDate date={item.date_created} />
        </p>
        <ItemItems quantity={quantity} />
      </>
    );
  }

  render() {
    const { error, item } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Item doesn't exist` ? (
          <p className="red">Item not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!item.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderItem();
    }
    return <Section className="ItemPage">{content}</Section>;
  }
}

function ItemItems({ items = [] }) {
  return (
    <ul className="ItemPage__item-list">
      {items.map(item => (
        <li key={item.id} className="ItemPage__item">
          <p className="ItemPage__item-text">{item.text}</p>
          <p className="ItemPage__item-user">{item.user.full_name}</p>
        </li>
      ))}
    </ul>
  );
}
