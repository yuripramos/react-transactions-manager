import React, { Component } from "react";
import { redirect } from "../../../utils/redirect";
import { ListMenuItems, Item, Span } from "./styles";


class SidebarMenu extends Component {

  constructor(props) {
    super(props);

    this.redirectTo = this.redirectTo.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  redirectTo(path) {
    redirect(path);
  }

  isActive(path) {
    const { currentLocation } = this.props;
    return currentLocation.includes(path);
  }
  render() {
    return (
      <ListMenuItems>
        <Item
        >
          <Span>SHIPPER</Span>
        </Item>
        <Item
        >
          <Span>BECOME A CARRIER</Span>
        </Item>
        <Item
        >
          <Span>LOGIN</Span>
        </Item>
        <Item
        >
          <Span>SIGN UP</Span>
        </Item>
      </ListMenuItems>
    );
  }
}

export default SidebarMenu;
