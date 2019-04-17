import Content from "./Content";

import { connect } from "redux-zero/react";

import transferActions from "../../actions/Transactions";

export default connect(
  ({
    handleUserInputOriginAccount,
    accounts,
    originAccount,
    transfers,
    isFilled,
    mockGet,
    handleUserInputTranferData,
    transferData,
    handleUserInputTransferCurrency,
    currentAccount,
    handleUserInputFavoredData,
    favoredData
  }) => ({
    handleUserInputOriginAccount,
    accounts,
    originAccount,
    transfers,
    isFilled,
    mockGet,
    handleUserInputTranferData,
    transferData,
    handleUserInputTransferCurrency,
    currentAccount,
    handleUserInputFavoredData,
    favoredData
  }),
  transferActions
)(Content);
