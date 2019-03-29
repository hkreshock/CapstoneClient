import React from "react";

import ReactDOM from "react-dom";

import ItemListPage from "./ItemListPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<ItemListPage />, div);

  ReactDOM.unmountComponentAtNode(div);
});
