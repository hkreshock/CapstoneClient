import React from "react";

import { shallow, Enzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import App from "./App";

describe("<App />", () => {
  it("renders <App />", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(3);
  });
});
