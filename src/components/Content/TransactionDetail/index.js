import TransactionDetail from "./TransactionDetail";

// export default TransactionDetail;
import { connect } from "redux-zero/react";

import transferActions from "../../../actions/Transactions";

export default connect(
  ({
    isFilled,
    handleUserInputOriginAccount,
    accounts,
    originAccount,
    handleUserInputTranferData,
    transferData,
    handleUserInputTransferCurrency,
    currentAccount,
    handleUserInputFavoredData,
    favoredData
  }) => ({
    isFilled,
    handleUserInputOriginAccount,
    accounts,
    originAccount,
    handleUserInputTranferData,
    transferData,
    handleUserInputTransferCurrency,
    currentAccount,
    handleUserInputFavoredData,
    favoredData
  }),
  transferActions
)(TransactionDetail);
