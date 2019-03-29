import React from "react";

import { shallow, Enzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import Header from "./Header";

describe("<Header />", () => {
  it("renders <Header />", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Header)).to.have.lengthOf(6);
  });
});
