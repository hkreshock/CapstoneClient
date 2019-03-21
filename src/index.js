import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";
import "./index.css";
import { ItemListProvider } from "./context/ItemListContext";
import { ItemProvider } from "./context/ItemContext";

ReactDOM.render(
  <BrowserRouter>
    <ItemListProvider>
      <ItemProvider>
        <App />
      </ItemProvider>
    </ItemListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
