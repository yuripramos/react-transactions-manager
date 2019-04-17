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

function TransactionList({ transfers }) {
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
  console.log("isFilled", isFilled, transfers);
  const isFilled = transfers.length > 0;
  return (
    <ListWrapper>
      {isFilled ? (
        transfers.map((e, i) => (
          <Item key={i}>
            <Address>
              <Description equipment>
                <Icon name="Truck" width="30px" height="30px" />
              </Description>
              {e.recipient.name}
              <Hide below="md">
                <DatesStyle>
                  {/* {moment(e.stops[0].windowStart).format("dddd")},{" "}
                  {moment(e.stops[0].windowStart).format("MMM Do YYYY")} */}
                </DatesStyle>
              </Hide>
            </Address>
            <Arrow> > </Arrow>
            <Address spacing>
              <Description>{e.ammount}</Description>
              {e.favoredName}
              <Hide below="md">
                <DatesStyle>
                  {` ${e.recipient.bank} ${e.recipient.agency} `}
                  {e.recipient.bankAccount}
                  {`${e.documentType} ${e.document}`}
                </DatesStyle>
              </Hide>
            </Address>
          </Item>
        ))
      ) : (
        <div>No Transfers made from now</div>
      )}
    </ListWrapper>
  );
}

export default TransactionList;

TransactionList.propTypes = {
  ships: array,
  getCity: func
};
