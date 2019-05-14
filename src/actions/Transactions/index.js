import { unFormatNumber } from "../../utils/formatNumber";
import { availableBalance } from "../../utils/validations";
import moment from "moment";

export default () => ({
  handleUserInputTranferData: (state, e) => {
    const { name, value } = e.target;
    const newDate = moment(value).format("l");
    return {
      transferData: {
        ...state.transferData,
        error: null,
        [name]: newDate
      }
    };
  },
  handleUserInputTransferCurrency: (state, value) => ({
    transferData: {
      ...state.transferData,
      value
    }
  }),
  handleUserInputTranferDataType: (state, e) => {
    const { name, value } = e.target;
    return {
      transferData: {
        ...state.transferData,
        error: null,
        [name]: value
      }
    };
  },
  handleUserInputFavoredData: (state, e) => {
    const { name, value } = e.target;
    return {
      favoredData: {
        ...state.favoredData,
        error: null,
        [name]: value
      }
    };
  },
  handleUserInputOriginAccount: (state, e) => {
    const { name, value } = e.target;
    return {
      originAccount: {
        ...state.originAccount,
        error: null,
        [name]: value
      }
    };
  },
  totalBalance: state => {
    const { transfers } = state;
    const newBalance = transfers.reduce((acc, val) => {
      return val.typeOfTransaction === "credit"
        ? acc + parseFloat(val.ammount)
        : acc - parseFloat(val.ammount);
    }, 0);

    return {
      originAccount: {
        ...state.originAccount,
        availableBalance: newBalance
      }
    };
  },
  createTransfer: async (state, favoredData, transferData, originAccount) => {
    const body = {
      recipient: {
        bankId: "000",
        bankName: favoredData.bank,
        bankBranch: favoredData.agency,
        bankAccount: favoredData.account,
        name: `${originAccount.givenName} ${originAccount.surName}`,
        taxId: originAccount.document
      },
      document: favoredData.document,
      documentType: favoredData.documentType,
      favoredName: favoredData.name,
      ammount: unFormatNumber(transferData.value),
      dueDate: transferData.date,
      typeOfTransaction: transferData.typeOfTransaction,
      originAccount: originAccount.number
    };

    const transfers = [body, ...state.transfers];
    localStorage.setItem("transfers", JSON.stringify(transfers));
    const { typeOfTransaction } = transferData;
    return {
      transfers: transfers,
      originAccount: {
        ...state.originAccount,
        availableBalance: availableBalance(
          originAccount,
          transferData,
          typeOfTransaction
        )
      }
    };
  },
  resetFields: () => {
    return {
      favoredData: {},
      transferData: {}
    };
  }
});
