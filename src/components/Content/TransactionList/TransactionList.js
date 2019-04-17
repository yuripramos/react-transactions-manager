import React from "react";
import { array, func } from "prop-types";
import Icon from "../../common/Icon";
import moment from "moment-timezone";
import formatNumber from "../../../utils/formatNumber";
import Hide from "../../common/Hide";
import {
  Item,
  ListWrapper,
  Description,
  Address,
  DatesStyle,
  Arrow,
  City
} from "./styles";

function TransactionList({ ships, ShowDetails, detailedShip }) {
  const getCity = (obj, index) => {
    return (
      <City>
        {`${obj.stops[index].city}, ${obj.stops[index].state}  ${
          obj.stops[index].zipcode
        }
        `}
      </City>
    );
  };
  return (
    <ListWrapper>
      {/* {ships.map((e, i) => (
        <Item
          key={i}
          onClick={() => ShowDetails(e.id)}
          isActive={e.id === detailedShip.id}
        >
          <Address>
            <Description equipment>
              <Icon name="Truck" width="30px" height="30px" />
              &nbsp;{e.equipmentType} {e.equipmentSize}"
            </Description>
            {getCity(e, 0)}
            <Hide below="md">
              <DatesStyle>
                {moment(e.stops[0].windowStart).format("dddd")},{" "}
                {moment(e.stops[0].windowStart).format("MMM Do YYYY")}
              </DatesStyle>
            </Hide>
          </Address>
          <Arrow> > </Arrow>
          <Address spacing>
            <Description>$ {formatNumber(e.fare)}</Description>
            {getCity(e, 1)}
            <Hide below="md">
              <DatesStyle>
                {moment(e.stops[1].windowStart).format("dddd")},{" "}
                {moment(e.stops[1].windowStart).format("MMM Do YYYY")}
              </DatesStyle>
            </Hide>
          </Address>
        </Item>
      ))} */}
      Listagem
    </ListWrapper>
  );
}

export default TransactionList;

TransactionList.propTypes = {
  ships: array,
  getCity: func
};
