import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";
import "./index.css";
import { ItemListProvider } from "./context/ItemListContext";
import { ItemProvider } from "./context/ItemContext";
import { ListProvider } from "./context/ListContext";

ReactDOM.render(
  <BrowserRouter>
    <ItemListProvider>
      <ListProvider>
        <ItemProvider>
          <App />
        </ItemProvider>
      </ListProvider>
    </ItemListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
