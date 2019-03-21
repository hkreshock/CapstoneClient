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

// const firstTooltip = (
//   <Tooltip color="hotpink" message="tooltip message">
//     ipsum
//   </Tooltip>
// );
// const secondTooltip = (
//   <Tooltip color="#126BCC" message="another tooltip message">
//     officiis
//   </Tooltip>
// );

class App extends Component {
  state = {
    shoppingItems: []
  };

  render() {
    return (
      <div className="App">
        <header className="AppHeader">
          <Header />
        </header>
        <main className="AppMain">
          <Bubbles numberOfBubbles={60} />
          <Switch>
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Route exact path={"/"} component={MainPage} className="MainPage" />
            <Route exact path={"/itemList"} component={ItemListPage} />
            <PublicOnlyRoute path={"/login"} component={LoginPage} />
            <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
            <PublicOnlyRoute path={"/newList"} component={NewList} />
            <PrivateRoute path={"/item/:itemId"} component={ItemPage} />
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
