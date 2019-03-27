import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";
import "./index.css";
import { ItemListProvider } from "./context/ItemListContext";
import { ItemProvider } from "./context/ItemContext";
import { LoginProvider } from "./context/UserContext";

ReactDOM.render(
  <BrowserRouter>
    <LoginProvider>
      <ItemListProvider>
        <ItemProvider>
          <App />
        </ItemProvider>
      </ItemListProvider>
    </LoginProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
