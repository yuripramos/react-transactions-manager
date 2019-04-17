import React, { Component } from "react";

import { Container } from "../../styles/grid";
import TransactionList from "./TransactionList";
import { arrayOf, bool, object, func } from "prop-types";
import TransactionDetail from "./TransactionDetail";
import Hide from "../common/Hide";
import { isResponsive } from "../../utils/getResolution";

import { ContentWrapper, Column } from "./styles";

class Content extends Component {
  constructor(props) {
    super(props);
    this.innerRef = React.createRef();
  }
  async componentDidMount() {
    this.props.AllShips(3);
  }

  render() {
    const { shipsArray, ShowDetails, detailedShip } = this.props;
    return (
      <Container>
        <ContentWrapper>
          <Column width={isResponsive() ? 0 : 35}>
            <Hide below="md">
              <TransactionList
                ships={shipsArray}
                ShowDetails={ShowDetails}
                detailedShip={detailedShip}
              />
            </Hide>
          </Column>
          <Column width={isResponsive() ? 100 : 65}>
            <TransactionDetail
              detailedShip={detailedShip}
              innerRef={this.innerRef}
            />
          </Column>
        </ContentWrapper>
      </Container>
    );
  }
}

Content.defaultProps = {};

Content.propTypes = {
  shipsArray: arrayOf(object),
  isFilled: bool,
  ShowDetails: func
};

export default Content;
