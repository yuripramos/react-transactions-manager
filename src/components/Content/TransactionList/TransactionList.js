import React from "react";
import { array, func } from "prop-types";
import Icon from "../../common/Icon";
import Hide from "../../common/Hide";
import {
  Item,
  ListWrapper,
  Description,
  Address,
  InfoStyle,
  Arrow,
  Name
} from "./styles";
import formatNumber from "../../../utils/formatNumber";

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
                <InfoStyle>{e.recipient.taxId}</InfoStyle>
              </Description>
              <Name>{e.recipient.name}</Name>
              <Hide below="md" />
            </Address>
            <Arrow>
              {" "}
              <Icon name="To" width="25px" height="25px" />{" "}
            </Arrow>
            <Address spacing>
              <Description>
                {e.dueDate} - R$ {e.ammount && formatNumber(e.ammount)}
              </Description>
              <InfoStyle>{e.documentType.toUpperCase()}{`: ${e.document}`}</InfoStyle>
              <Hide below="md">
                <InfoStyle>
                  {`Bank: ${e.recipient.bankName} - ${e.recipient.bankBranch}/ ${
                    e.recipient.bankAccount
                  }`}
                </InfoStyle>
              </Hide>
              <Name>{e.favoredName}</Name>
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
