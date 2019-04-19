import React, { Component } from "react";
import { shape, func } from "prop-types";
import { Container, Row, Column } from "../../styles/grid";
import SidebarMenu from "../common/SidebarMenu";
import Logo from "../../assets/currency.png";
import { HeaderWrapper, TitleWrapper } from "./styles";
import { slide as Menu } from "react-burger-menu";
import Hide from "../common/Hide";
import Icon from "../common/Icon";
import TransactionList from "../Content/TransactionList";
import { rem } from "../../styles/tools";
import { white, black } from "../../styles/settings";

const bmStyles = {
  bmBurgerButton: {
    display: "inline-block",
    position: "absolute",
    top: `${rem(20)}`,
    left: `${rem(25)}`,
    padding: `${rem(2)}`,
    cursor: "pointer"
  },
  bmMenuWrap: {
    left: 0
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };

    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  onToggleMenu({ isOpen }) {
    this.setState({ menuOpen: isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const {
      shipsArray,
      ShowDetails,
      detailedShip,
      isFilled,
      history
    } = this.props;
    const { menuOpen } = this.state;
    return (
      <HeaderWrapper>
        <Container onClick={this.closeMenu}>
          <Hide below="md">
            <Row>
              <Column>
                <SidebarMenu currentLocation={history.location.pathname} />
              </Column>
              <Column>
                <TitleWrapper>
                  <img
                    src={Logo}
                    alt="logo financial"
                    width="44px"
                    height="44px"
                  />
                </TitleWrapper>
              </Column>
            </Row>
          </Hide>
          <Hide above="md">
            {isFilled && (
              <Menu
                isOpen={menuOpen}
                onStateChange={this.onToggleMenu}
                customBurgerIcon={
                  menuOpen === true ? (
                    <Icon name="MenuClose" color={white} />
                  ) : (
                    <Icon name="Menu" color={black} />
                  )
                }
                width="70%"
                styles={bmStyles}
              >
                <TransactionList
                  ships={shipsArray}
                  ShowDetails={ShowDetails}
                  detailedShip={detailedShip}
                />
              </Menu>
            )}
            <TitleWrapper>
              <img src={Logo} alt="logo loadsmart" width="50px" height="50px" />
            </TitleWrapper>
          </Hide>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;

Header.propTypes = {
  history: shape({
    push: func
  })
};
