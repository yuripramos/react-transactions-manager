import * as SHIPS_API from "../../services/Ships";
import { unFormatNumber } from "../../utils/formatNumber";
import { availableBalance } from "../../utils/validations";
import moment from "moment";

export default () => ({
  AllShips: async (state, n) => {
    const AllShipsRequest = await SHIPS_API.getAllShips(n);
    return {
      isFilled: AllShipsRequest.length > 0,
      shipsArray: AllShipsRequest
    };
  },
  mockGet: async state => {
    return {
      isFilled: state.transfers.length > 0
    };
  },
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
  handleUserInputTranferDataDate: (state, from) => ({
    transferData: {
      ...state.transferData,
      error: null,
      date: from
    }
  }),
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
      originAccount: originAccount.number
    };

    const transfers = [...state.transfers, body];

    return {
      transfers: transfers,
      originAccount: {
        ...state.originAccount,
        availableBalance: availableBalance(originAccount, transferData)
      }
    };
  },
  resetFields: _ => {
    return {
      favoredData: {},
      transferData: {}
    };
  }
});
