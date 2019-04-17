import React from "react";
import { shallow } from "enzyme";
import Content from "./Content";

describe("Calculator", () => {
  it("should match snapshot", () => {
    expect(shallow(<Content />)).toMatchSnapshot();
  });
});
