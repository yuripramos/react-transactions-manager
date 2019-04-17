import React from "react";
import { shallow } from "enzyme";

import SidebarMenu  from "./SidebarMenu";



const props = {
  currentLocation: ""
};

describe("SidebarMenu component", () => {
  it("should match snapshot", () => {
    expect(shallow(<SidebarMenu {...props} />)).toMatchSnapshot();
  });
});

