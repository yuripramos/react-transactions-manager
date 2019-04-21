import React from "react";
import { arrayOf, object } from "prop-types";
import Icon from "../../common/Icon";
import {
  Title,
  Item,
  ListWrapper,
  Description,
  AccInfo,
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
            <AccInfo>
              <Description recipient>
                <Icon name="Transactions" />
              </Description>
              <InfoStyle>Origin Acc: {e.originAccount} / {e.typeOfTransaction}</InfoStyle>
              <InfoStyle>Document: {e.recipient.taxId}</InfoStyle>
              <Name>{e.recipient.name}</Name>
            </AccInfo>
            <Arrow>
              {" "}
              <Icon name="To" width="25px" height="25px" />{" "}
            </Arrow>
            <AccInfo spacing="true">
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
            </AccInfo>
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
  transfers: arrayOf(object),
};
