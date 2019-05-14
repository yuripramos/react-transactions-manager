import React, { Component } from "react";
import { ListMenuItems, Item, Span } from "./styles";
import { object } from "prop-types";

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.isActive.bind(this);
  }

  isActive(path) {
    const { currentLocation } = this.props;
    return currentLocation.includes(path);
  }
  render() {
    return (
      <ListMenuItems>
        <Item>
          <Span>TRANSACTIONS</Span>
        </Item>
        <Item>
          <Span>ABOUT US</Span>
        </Item>
        <Item>
          <Span>OUR VISION</Span>
        </Item>
        <Item>
          <Span>LOGIN</Span>
        </Item>
      </ListMenuItems>
    );
  }
}

export default SidebarMenu;

SidebarMenu.propTypes = {
  currentLocation: object
};
