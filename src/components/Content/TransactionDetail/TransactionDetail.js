import React from "react";
import { isResponsive } from "../../../utils/getResolution";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import { Row, Container, Column } from "../../../styles/grid";
import {
  DashboardWrapper,
  Fieldset,
  FieldsetTitle,
  TitleWrapper,
  Content,
  FloatingText,
  AvailableBalBox,
  RowsWrapper,
  Button,
  Currency,
  ButtonWrapper,
  ShowHideWrapper,
  IconWrapper,
  Result
} from "./styles";
import { toCurrency } from "../../../utils/currency";

function TransactionDetail({ detailedShip }) {
  console.log("cassin vive");
  return (
    <Result large>
      <form noValidate>
        <Fieldset width={18}>
          <TitleWrapper lowMargin>
            <FieldsetTitle>ORIGIN ACCOUNT</FieldsetTitle>
          </TitleWrapper>
          account value
          <AvailableBalBox>
            <TitleWrapper>
              <FieldsetTitle>AVAILABLE BALANCE</FieldsetTitle>
            </TitleWrapper>
            <FloatingText>
              <Currency>
                R$&nbsp;&nbsp;originaccount.number.availableBalance
              </Currency>
            </FloatingText>
          </AvailableBalBox>
        </Fieldset>
        <Fieldset width={22} adjust={-4}>
          <TitleWrapper bigMargin>
            <FieldsetTitle>TRANSFER DATA</FieldsetTitle>
          </TitleWrapper>
          <Input
            // onChange={handleUserInputTranferData}
            type="text"
            name="date"
            // valid={() => checkDate(transferData.date)}
            // value={transferData.date}
            label={"DATE"}
            maxLength={11}
            tinyLabels
            maskType="datetime"
            innerRef={this.inputRef}
            refType={this.inputRef}
          />
          <Input
            onChange={e => {
              const valueAsCurrency = toCurrency(e.target.value, ".", ",");
              // handleUserInputTransferCurrency(valueAsCurrency);
            }}
            type="text"
            name="value"
            prefix={"R$"}
            maxLength={14}
            // value={transferData.value}
            label="VALUE"
            tinyLabels
            innerRef={this.inputRef}
            refType={this.inputRef}
          />
        </Fieldset>
        <Fieldset width={55} adjust={-3} withRows>
          <TitleWrapper withRows>
            <FieldsetTitle>FAVORED DATA</FieldsetTitle>
          </TitleWrapper>
          <RowsWrapper>
            <Row>
              <Input
                maxLength="45"
                type="text"
                name="favored"
                // value={currentAccount.name}
                valid={true}
                label="FAVORED"
                dataTest="recipientName"
                disabled
                tinyLabels
                width={72}
              />
              <Input
                type="text"
                name="CNPJ"
                // value={currentAccount.document}
                valid={true}
                label="CNPJ"
                dataTest="recipientTaxId"
                disabled
                maskType="cpfcnpj"
                tinyLabels
                width={33}
              />
            </Row>
            <Row>
              <Dropdown
                // onChange={handleUserInputFavoredData}
                name="bank"
                list={[
                  { name: "Itau", value: "Itau" },
                  { name: "Unibanco", value: "Unibanco" },
                  { name: "Nubank", value: "Nubank" },
                  { name: "Bradesco", value: "Bradesco" }
                ]}
                // valid={() => checkBank(favoredData.bank)}
                // value={favoredData.bank}
                label={"Bank"}
                tinyLabels
                width={50}
              />
              <Input
                // onChange={handleUserInputFavoredData}
                maxLength="6"
                type="text"
                name="agency"
                // value={favoredData.agency}
                label={"AGENCY"}
                tinyLabels
                width={20}
              />
              <Input
                // onChange={handleUserInputFavoredData}
                maxLength="11"
                type="text"
                name="account"
                // value={favoredData.account}
                label={"ACCOUNT"}
                tinyLabels
                width={30}
              />
            </Row>
          </RowsWrapper>
        </Fieldset>
        <ButtonWrapper>
          <Button
            // disabled={isDisabled(
            //   checkDate(transferData.date),
            //   checkValue(transferData.value),
            //   checkBank(favoredData.bank),
            //   checkAgency(favoredData.agency),
            //   checkAccount(favoredData.account),
            //   checkOriginAccount(originAccount.number)
            // )}
            isCallToAction
            // onClick={() => {
            //   if (this.checkAvailableDate()) {
            //     this.displayConfirmModal();
            //   }
            // }}
          >
            CREATE
          </Button>
        </ButtonWrapper>
      </form>
    </Result>
  );
}

export default TransactionDetail;
