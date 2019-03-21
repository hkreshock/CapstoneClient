import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import { Link } from "react-router-dom";
import Lists from "../Lists/Lists";
import "./MainPage.css";
import Tooltip from "../../MISC/composition/Tooltip";

const firstTooltip = (
  <Tooltip
    color="blue"
    message="Register and Login are in the top right corner of your screen"
  >
    above
  </Tooltip>
);

export default class MainPage extends Component {
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
              <p>
                If you haven't yet, register or login {firstTooltip} to begin
                creating your new and advanced lists!
              </p>
              <p>
                If you're already logged in, click on "Start New List" to begin
                using the Grocery Helper,{" "}
              </p>{" "}
              <p>
                or select one of the lists you've already made to continue
                adding to it!
              </p>
            </section>
            <Link to={`/newList`} className="LinkToNewList">
              Start New List
            </Link>
            <Lists className="AllGroceryLists" />
          </Section>
        </div>
      </div>
    );
  }
}
