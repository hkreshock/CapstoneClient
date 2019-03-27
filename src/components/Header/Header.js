import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import "./Header.css";
import LoginContext from "../../context/UserContext";

export default class Header extends Component {
  static contextType = LoginContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken().then(this.context.logOut);
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register</Link>
        <Hyph />
        <Link to="/login">Log in</Link>
      </div>
    );
  }

  renderWelcomeUser() {
    return <h2>Welcome {this.context.userLoggedIn.user_name}</h2>;
  }

  render() {
    return (
      <nav className="Header">
        <h1>
          <Link to="/">
            <div className="Title">Grocery Helper</div>
          </Link>
        </h1>
        {this.context.userLoggedIn == null ? this.renderWelcomeUser() : null}
        {this.context.loggedIn === true
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
