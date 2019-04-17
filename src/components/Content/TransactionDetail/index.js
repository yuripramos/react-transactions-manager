import TransactionDetail from "./TransactionDetail";

import { connect } from "redux-zero/react";

import transferActions from "../../../actions/Transactions";

export default connect(
  ({
    isFilled,
    handleUserInputOriginAccount,
    accounts,
    transfers,
    originAccount,
    handleUserInputTranferData,
    transferData,
    handleUserInputTransferCurrency,
    currentAccount,
    handleUserInputFavoredData,
    favoredData,
    createTransfer
  }) => ({
    isFilled,
    handleUserInputOriginAccount,
    accounts,
    transfers,
    originAccount,
    handleUserInputTranferData,
    transferData,
    handleUserInputTransferCurrency,
    currentAccount,
    handleUserInputFavoredData,
    favoredData,
    createTransfer
  }),
  transferActions
)(TransactionDetail);
