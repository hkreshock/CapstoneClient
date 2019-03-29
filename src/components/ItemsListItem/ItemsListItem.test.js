import React from "react";

import { shallow, Enzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import ItemsListItem from "./ItemsListItem";

describe("<ItemsListItem />", () => {
  it("renders <ItemsListItem />", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<ItemsListItem />);
    expect(wrapper.find(ItemsListItem)).to.have.lengthOf(13);
  });
});
