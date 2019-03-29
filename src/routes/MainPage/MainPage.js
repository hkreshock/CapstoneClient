import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import { Link } from "react-router-dom";
import GroceryLists from "../GroceryLists/GroceryLists";
import "./MainPage.css";
import Tooltip from "../../MISC/composition/Tooltip";
import TokenService from "../../services/token-service";

const Register_Login = (
  <Tooltip
    color="blue"
    message="Register and Login are in the top right corner of your screen"
  >
    above
  </Tooltip>
);

export default class MainPage extends Component {
  renderUserLists() {
    return (
      <div className="UserGroceryLists">
        <GroceryLists className="AllGroceryLists" />
      </div>
    );
  }

  renderStartNewList() {
    return (
      <div className="CreateNewList">
        <Link to={`/addList`} className="LinkToNewList">
          Start New List
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="Nav">
        <div id="root">
          <Section className="MainPage">
            <h2>Welcome to the Grocery Helper!</h2>
            <section className="MainParagraph">
              <p>
                This is your new tool to give your shopping list some depth!
              </p>{" "}
              <section>
                If you haven't yet, register or login {Register_Login} to begin
                creating your new and advanced lists!
              </section>
              <p>
                If you're already logged in, click on "Start New List" to begin
                using the Grocery Helper,{" "}
              </p>{" "}
              <p>
                or select one of the lists you've already made to continue
                adding to it!
              </p>
            </section>
          </Section>
          {TokenService.hasAuthToken() ? this.renderStartNewList() : null}
          <br />
          {TokenService.hasAuthToken() ? this.renderUserLists() : null}
        </div>
      </div>
    );
  }
}
