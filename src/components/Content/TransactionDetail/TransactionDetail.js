import React, { Component } from "react";
import { isResponsive } from "../../../utils/getResolution";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import { Row } from "../../../styles/grid";

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
  checkTypeOfDocument
} from "../../../utils/validations";

export const isDisabled = (
  isValidValue,
  isValidBank,
  isValidAgency,
  isValidAccount
) => {
  return !(isValidValue && isValidBank && isValidAgency && isValidAccount);
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
      transferData,
      favoredData,
      originAccount,
      createTransfer,
      resetFields
    } = this.props;
    console.log(transferData.date);
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
                <Currency>
                  R$&nbsp;&nbsp;{originAccount.availableBalance}
                </Currency>
              </FloatingText>
            </AvailableBalBox>
          </Fieldset>
          <Fieldset width={30} adjust={-4}>
            <TitleWrapper bigMargin>
              <FieldsetTitle>TRANSFER DATA</FieldsetTitle>
            </TitleWrapper>
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
            <Input
              onChange={e => {
                const valueAsCurrency = toCurrency(e.target.value, ".", ",");
                handleUserInputTransferCurrency(valueAsCurrency);
              }}
              type="text"
              name="value"
              valid={() => checkValue(transferData.value)}
              prefix={"R$"}
              width={61}
              maxLength={14}
              value={transferData.value}
              label="VALUE"
              tinyLabels
            />
          </Fieldset>
          <Fieldset width={98} adjust={-3} withRows>
            <TitleWrapper withRows>
              <FieldsetTitle>FAVORED DATA</FieldsetTitle>
            </TitleWrapper>
            <RowsWrapper>
              <Row>
                <Input
                  maxLength="45"
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
                  width={50}
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
                  width={15}
                />
                <Input
                  onChange={handleUserInputFavoredData}
                  maxLength="11"
                  type="text"
                  name="account"
                  valid={() => checkAccount(favoredData.account)}
                  value={favoredData.account}
                  label={"ACCOUNT"}
                  tinyLabels
                  width={25}
                />
              </Row>
            </RowsWrapper>
          </Fieldset>
          <ButtonWrapper>
            <Button
              // disabled={isDisabled(
              //   checkValue(transferData.value),
              //   checkBank(favoredData.bank),
              //   checkAgency(favoredData.agency),
              //   checkAccount(favoredData.account),
              //   checkTypeOfDocument(favoredData.documentType)
              // )}
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
