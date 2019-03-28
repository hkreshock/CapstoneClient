import React, { Component } from "react";
import { Button, Input } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../context/UserContext";
import UserApiService from "../../services/user-api-service";

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };
  state = { error: null };
  static contextType = UserContext;

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    console.log("login form submitted");

    const authToken = window.btoa(`${user_name.value}:${password.value}`);

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(() => {
        TokenService.saveAuthToken(authToken);
        return UserApiService.getUsers();
      })
      .then(users => {
        return users.find(user => user.user_name === user_name.value);
      })
      .then(user => this.context.logIn(user))
      .then(() => {
        user_name.value = "";
        password.value = "";
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="user_name">
          <label htmlFor="LoginForm__user_name">User name</label>
          <Input required name="user_name" id="LoginForm__user_name" />
        </div>
        <div className="password">
          <label htmlFor="LoginForm__password">Password</label>
          <Input
            required
            name="password"
            type="password"
            id="LoginForm__password"
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
    );
  }
}
