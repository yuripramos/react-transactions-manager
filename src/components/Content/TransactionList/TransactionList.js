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
  const isFilled = transfers.length > 0;
  return (
    <ListWrapper>
      {isFilled ? (
        transfers.map((e, i) => (
          <Item key={i}>
            <Address>
              <Description recipient>
                <Icon name="Transactions" />
                <DatesStyle>{e.recipient.taxId}</DatesStyle>
              </Description>
              {e.recipient.name}
              <Hide below="md" />
            </Address>
            <Arrow>
              {" "}
              <Icon name="To" width="25px" height="25px" />{" "}
            </Arrow>
            <Address spacing>
              <Description>
                {e.dueDate} R$ {e.ammount}
              </Description>
              <DatesStyle>{`${e.documentType}: ${e.document}`}</DatesStyle>
              <Hide below="md">
                <DatesStyle>
                  {` ${e.recipient.bankName} ${e.recipient.bankBranch}/ ${
                    e.recipient.bankAccount
                  }`}
                </DatesStyle>
              </Hide>
              {e.favoredName}
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
