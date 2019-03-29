import React from "react";

import { shallow, Enzyme } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import ProductItem from "./ProductItem";

describe("<ProductItem />", () => {
  it("renders <ProductItem />", () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(<ProductItem />);
    expect(wrapper.find(ProductItem)).to.have.lengthOf(11);
  });
});
