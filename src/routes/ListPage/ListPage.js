import React, { Component } from "react";
import ListApiService from "../../services/list-api-service";
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils";
import ListContext from "../../context/ListContext";

export default class ListPage extends Component {
  static contextType = ListContext;

  componentDidMount() {
    const { listId } = this.props.match.params;
    this.context.clearError();
    ListApiService.getList(listId)
      .then(this.context.setList)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  renderList() {
    const { list } = this.props;
    return (
      <>
        <h2>{list.title}</h2>
        <p>
          <Hyph />
          <NiceDate date={list.date_created} />
        </p>
        <ListContent list={list} />
      </>
    );
  }

  render() {
    const { error, groceryList } = this.context;
    let content;
    if (error) {
      content =
        error.error === `List doesn't exist` ? (
          <p className="red">Item not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!groceryList.id) {
      content = <div className="loading" />;
    } else {
      content = this.renderList();
    }
    return <Section className="ListPage">{content}</Section>;
  }
}

function ListContent({ item }) {
  return <p className="ItemPage__content">{item.content}</p>;
}
