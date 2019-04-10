import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import TokenService from "../../services/token-service";
import UserApiService from "../../services/user-api-service";
import UserContext from "../../context/UserContext";

export default class RegistrationForm extends Component {
  static contextType = UserContext;

  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { full_name, email, user_name, password } = ev.target;

    console.log("registration form submitted");

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email: email.value,
      full_name: full_name.value
    })
      .then(() => {
        this.login(user_name.value, password.value);
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  login = (user_name, password) => {
    const authToken = window.btoa(`${user_name}:${password}`);

    AuthApiService.postLogin({
      user_name: user_name,
      password: password
    })
      .then(() => {
        TokenService.saveAuthToken(authToken);
        return UserApiService.getUsers();
      })
      .then(users => {
        return users.find(user => user.user_name === user_name);
      })
      .then(user => this.context.logIn(user))
      .then(() => {
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label>
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          />
        </div>
        <div className="email">
          <label htmlFor="RegistrationForm__email">
            Email
            <Required />
          </label>
          <Input
            name="email"
            type="mail"
            required
            id="RegistrationForm__email"
          />
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label>
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          />
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label>
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    );
  }
}
