import React from "react";
import { array, func } from "prop-types";
import Icon from "../../common/Icon";
import Hide from "../../common/Hide";
import {
  Title,
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
      <Title>Transactions History</Title>
      {isFilled ? (
        transfers.map((e, i) => (
          <Item key={i}>
            <Address>
              <Description recipient>
                <Icon name="Transactions" />
              </Description>
              <InfoStyle>Origin Acc: {e.originAccount} / {e.typeOfTransaction}</InfoStyle>
              <InfoStyle>Document: {e.recipient.taxId}</InfoStyle>
              <Name>{e.recipient.name}</Name>
              <Hide below="md" />
            </Address>
            <Arrow>
              {" "}
              <Icon name="To" width="25px" height="25px" />{" "}
            </Arrow>
            <Address spacing>
              <Description>
                {e.dueDate} / R$ {e.ammount && formatNumber(e.ammount)}
              </Description>
                <InfoStyle>
                  {`Bank: ${e.recipient.bankName} - ${e.recipient.bankBranch} / ${
                    e.recipient.bankAccount
                  }`}
                </InfoStyle>
              <Hide below="md">
                  <InfoStyle>{e.documentType.toUpperCase()}{`: ${e.document}`}</InfoStyle>
              </Hide>
              <Name>{e.favoredName}</Name>
            </Address>
          </Item>
        ))
      ) : (
        <div>No Transfers to display</div>
      )}
    </ListWrapper>
  );
}

export default TransactionList;

TransactionList.propTypes = {
  ships: array,
  getCity: func
};
