import React, { Component } from "react";
// import Split from "../../composition/Split";
import "./App.css";
// import Tooltip from "../../composition/Tooltip";
// import Messages from "../../MISC/Messages";
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
//       <main className="App">
//         <div className="App">
//           <TheDate />
//           <Messages name="Messages" unread={0} />
//           <Messages name="Notifications" unread={10} />
//         </div>
//         <Split className="left" flexBasis="2">
//           This is the content for the left Split. Lorem {firstTooltip} dolor sit
//           amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere
//           officia?
//           <br />
//           {/* make another tooltip directly inside the App */}
//           <Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
//         </Split>
//         <Split className="right">
//           This is the content for the right Split. Inventore aliquid cupiditate
//           suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo
//           possimus id soluta aspernatur.
//         </Split>
//       </main>
//     );
//   }
// }
export default App;
