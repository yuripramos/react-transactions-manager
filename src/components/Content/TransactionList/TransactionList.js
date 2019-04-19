import React from "react";
import { array } from "prop-types";
import Icon from "../../common/Icon";
import {
  Title,
  Item,
  ListWrapper,
  Description,
  Address,
  InfoStyle,
  Arrow,
  Name,
  Empty
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
              <InfoStyle>{e.documentType.toUpperCase()}{`: ${e.document}`}</InfoStyle>
              <Name>{e.favoredName}</Name>
            </Address>
          </Item>
        ))
      ) : (
        <Empty>No Transfers to display</Empty>
      )}
    </ListWrapper>
  );
}

export default TransactionList;

TransactionList.propTypes = {
  transfers: array
};
