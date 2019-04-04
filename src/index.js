import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";
import "./index.css";
import { ItemListProvider } from "./context/ItemListContext";
import { ItemProvider } from "./context/ItemContext";
import { UserProvider } from "./context/UserContext";
import { ProduceProvider } from "./context/ProduceContext";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ItemListProvider>
        <ProduceProvider>
          <ItemProvider>
            <App />
          </ItemProvider>
        </ProduceProvider>
      </ItemListProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
