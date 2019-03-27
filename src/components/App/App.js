import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../../routes/LoginPage/LoginPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PageNotFound from "../../routes/PageNotFound/PageNotFound";
import ItemPage from "../../routes/ItemPage/ItemPage";
import ItemListPage from "../../routes/ItemListPage/ItemListPage";
import MainPage from "../../routes/MainPage/MainPage";
import NewList from "../../routes/NewList/NewList";
import Bubbles from "../../components/BubblesForMain/Bubbles";
import ListPage from "../../routes/ListPage/ListPage";
import AddNewList from "../../routes/AddNewList/AddNewList";
import TokenService from "../../services/token-service";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <Header hasLoggedIn={TokenService.hasAuthToken()} />
        </header>
        <main className="AppMain">
          <Bubbles numberOfBubbles={60} />
          <Switch>
            <Route exact path={"/"} component={MainPage} className="MainPage" />
            <Route exact path={"/itemList"} component={ItemListPage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
            <PrivateRoute path={"/newList"} component={NewList} />
            <PrivateRoute path={"/item/:itemId"} component={ItemPage} />
            <PrivateRoute path={"/list/:listId"} component={ListPage} />
            <PrivateRoute path={"/addList"} component={AddNewList} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}
export default App;
