import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import { Link } from "react-router-dom";
import GroceryLists from "../GroceryLists/GroceryLists";
import "./MainPage.css";
import Tooltip from "../../MISC/composition/Tooltip";
import TokenService from "../../services/token-service";
import UserContext from "../../context/UserContext";

const Register_Login = (
  <Tooltip
    color="blue"
    message="Register and Login are in the top right corner of your screen"
  >
    above
  </Tooltip>
);

export default class MainPage extends Component {
  static contextType = UserContext;

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
              {this.context.loggedIn === false ? (
                <section>
                  Register or login {Register_Login} to begin creating your new
                  and advanced lists!
                </section>
              ) : (
                <p>
                  Click on "Start New List" to begin using the Grocery Helper,{" "}
                  or select one of the lists you've already made to continue
                  adding to it!
                </p>
              )}
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
