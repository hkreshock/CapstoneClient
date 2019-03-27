import React, { Component } from "react";
import ListApiService from "../../services/list-api-service";
import { NiceDate, Hyph, Section } from "../../components/Utils/Utils";
import LoginContext from "../../context/UserContext";
import ItemListPage from "../../components/ItemListPage/ItemListPage";

export default class ListPage extends Component {
  static contextType = LoginContext;

  state = {
    loaded: false
  };

  componentDidMount() {
    const { listId } = this.props.match.params;
    this.context.clearError();
    ListApiService.getList(listId)
      .then(data => this.context.setList(data))
      .catch(this.context.setError);
    this.setState({ loaded: true });
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  renderList() {
    const { List } = this.context;
    if (!List) {
      return <div className="loading" />;
    } else {
      return (
        <div className="List_Content">
          <h2>{List.title}</h2>
          <p>
            <Hyph />
            <NiceDate date={List.date_created} />
          </p>
          <ItemListPage />
        </div>
      );
    }
  }

  render() {
    const { error, List } = this.context;
    let content;
    if (error) {
      content =
        error.error === `List doesn't exist` ? (
          <p className="red">Item not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!List) {
      content = <div className="loading" />;
    } else {
      content = this.renderList();
    }
    return <Section className="ListPage">{content}</Section>;
  }
}
