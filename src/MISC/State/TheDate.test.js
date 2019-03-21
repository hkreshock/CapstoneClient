import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TheDate from "./TheDate";

describe(`TheDate Component`, () => {
  it.skip("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    expect(renderer.create(<TheDate />).toJSON()).toMatchSnapshot();
  });
});
