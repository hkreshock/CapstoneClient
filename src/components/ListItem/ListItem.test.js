import React from "react";

import { shallow, Enzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import ListItem from "./ListItem";

describe("<ListItem />", () => {
  it("renders <ListItem />", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<ListItem />);
    expect(wrapper.find(ListItem)).to.have.lengthOf(8);
  });
});
