import React, { Component } from "react";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import { func, object } from "prop-types";
import { Row } from "../../../styles/grid";
import { isResponsive } from "../../../utils/getResolution";
import formatNumber from "../../../utils/formatNumber";

import {
  Fieldset,
  FieldsetTitle,
  TitleWrapper,
  FloatingText,
  AvailableBalBox,
  RowsWrapper,
  Button,
  Currency,
  ButtonWrapper,
  Result
} from "./styles";
import { toCurrency } from "../../../utils/currency";
import {
  checkValue,
  checkBank,
  checkAgency,
  checkAccount,
  checkTypeOfDocument,
  checkTypeOfTransaction
} from "../../../utils/validations";

export const isDisabled = (
  isValidValue,
  isValidBank,
  isValidAgency,
  isValidAccount,
  isValidDocument,
  isValidTypeOfTransaction
) => {
  return !(
    isValidValue &&
    isValidBank &&
    isValidAgency &&
    isValidAccount &&
    isValidDocument &&
    isValidTypeOfTransaction
  );
};

class TransactionDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
    this.innerRef = React.createRef();
  }

  render() {
    const {
      handleUserInputTranferData,
      handleUserInputFavoredData,
      handleUserInputTransferCurrency,
      handleUserInputTranferDataType,
      transferData,
      favoredData,
      originAccount,
      createTransfer,
      resetFields
    } = this.props;
    return (
      <Result large>
        <form noValidate>
          <Fieldset width={20}>
            <TitleWrapper lowMargin>
              <FieldsetTitle>ORIGIN ACCOUNT</FieldsetTitle>
            </TitleWrapper>
            {originAccount.number}
            <AvailableBalBox>
              <TitleWrapper>
                <FieldsetTitle>AVAILABLE BALANCE</FieldsetTitle>
              </TitleWrapper>
              <FloatingText>
                <Currency inDebt={originAccount.availableBalance < 0}>
                  R$&nbsp;&nbsp;{formatNumber(originAccount.availableBalance)}
                </Currency>
              </FloatingText>
            </AvailableBalBox>
          </Fieldset>
          <Fieldset width={50} adjust={-4}>
            <TitleWrapper bigMargin>
              <FieldsetTitle>TRANSFER DATA</FieldsetTitle>
            </TitleWrapper>
            <RowsWrapper>
              <Row>
                <Input
                  onChange={handleUserInputTranferData}
                  type="date"
                  name="date"
                  value={transferData.date}
                  label={"DATE"}
                  maxLength={11}
                  width={72}
                  tinyLabels
                />
                <Dropdown
                  onChange={handleUserInputTranferDataType}
                  name="typeOfTransaction"
                  list={[
                    { name: "debit", value: "debit" },
                    { name: "credit", value: "credit" }
                  ]}
                  value={transferData.typeOfTransaction}
                  valid={() =>
                    checkTypeOfTransaction(transferData.typeOfTransaction)
                  }
                  label="TYPE OF TRANSACTION"
                  tinyLabels
                  width={42}
                />
              </Row>
              <Row>
                <Input
                  onChange={e => {
                    const valueAsCurrency = toCurrency(
                      e.target.value,
                      ".",
                      ","
                    );
                    handleUserInputTransferCurrency(valueAsCurrency);
                  }}
                  type="text"
                  name="value"
                  valid={() => checkValue(transferData.value)}
                  prefix={"R$"}
                  width={62}
                  maxLength={14}
                  value={transferData.value}
                  label="VALUE"
                  tinyLabels
                />
              </Row>
            </RowsWrapper>
          </Fieldset>
          <Fieldset width={isResponsive() ? false : 98} adjust={-3} withRows>
            <TitleWrapper withRows>
              <FieldsetTitle>FAVORED DATA</FieldsetTitle>
            </TitleWrapper>
            <RowsWrapper>
              <Row>
                <Input
                  maxLength="35"
                  type="text"
                  name="name"
                  onChange={handleUserInputFavoredData}
                  value={favoredData.name}
                  label="FAVORED"
                  tinyLabels
                  width={60}
                />
                <Dropdown
                  onChange={handleUserInputFavoredData}
                  name="documentType"
                  list={[
                    { name: "cpf", value: "cpf" },
                    { name: "cnpj", value: "cnpj" }
                  ]}
                  value={favoredData.documentType}
                  valid={() => checkTypeOfDocument(favoredData.documentType)}
                  label="TYPE OF DOCUMENT"
                  tinyLabels
                  width={30}
                />
                <Input
                  type="text"
                  name="document"
                  onChange={handleUserInputFavoredData}
                  value={favoredData.document}
                  label="DOCUMENT"
                  tinyLabels
                  width={35}
                />
              </Row>
              <Row>
                <Dropdown
                  onChange={handleUserInputFavoredData}
                  name="bank"
                  list={[
                    { name: "Itau", value: "Itau" },
                    { name: "Unibanco", value: "Unibanco" },
                    { name: "Nubank", value: "Nubank" },
                    { name: "Bradesco", value: "Bradesco" }
                  ]}
                  valid={() => checkBank(favoredData.bank)}
                  value={favoredData.bank}
                  label="BANK"
                  tinyLabels
                  width={70}
                />
                <Input
                  onChange={handleUserInputFavoredData}
                  maxLength="6"
                  type="text"
                  name="agency"
                  value={favoredData.agency}
                  valid={() => checkAgency(favoredData.agency)}
                  label={"AGENCY"}
                  tinyLabels
                  width={12}
                />
                <Input
                  onChange={handleUserInputFavoredData}
                  maxLength="10"
                  type="text"
                  name="account"
                  valid={() => checkAccount(favoredData.account)}
                  value={favoredData.account}
                  label={"ACCOUNT"}
                  tinyLabels
                  width={18}
                />
              </Row>
            </RowsWrapper>
          </Fieldset>
          <ButtonWrapper>
            <Button
              disabled={isDisabled(
                checkValue(transferData.value),
                checkBank(favoredData.bank),
                checkAgency(favoredData.agency),
                checkAccount(favoredData.account),
                checkTypeOfDocument(favoredData.documentType),
                checkTypeOfTransaction(transferData.typeOfTransaction)
              )}
              isCallToAction
              onClick={() => {
                createTransfer(favoredData, transferData, originAccount);
                resetFields();
              }}
            >
              CREATE
            </Button>
          </ButtonWrapper>
        </form>
      </Result>
    );
  }
}

export default TransactionDetail;

TransactionDetail.propTypes = {
  handleUserInputTranferData: func,
  handleUserInputFavoredData: func,
  handleUserInputTransferCurrency: func,
  handleUserInputTranferDataType: func,
  transferData: object,
  originAccount: object,
  createTransfer: func,
  resetFields: func,
  favoredData: object
};
