import * as SHIPS_API from "../../services/Ships";
import moment from "moment";
import { unFormatNumber } from "../../utils/formatNumber";
import { hasAvailableBalance } from "../../utils/validations";

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

    return {
      transferData: {
        ...state.transferData,
        error: null,
        [name]: value
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
        name: `${originAccount.givenName} ${originAccount.surname}`,
        taxId: originAccount.document
      },
      document: favoredData.document,
      documentType: favoredData.documentType,
      favoredName: favoredData.name,
      ammount: unFormatNumber(transferData.value),
      // dueDate: parseInt(
      //   moment(transferData.date, "MM-DD-YYYY", "X").format("x")
      // ),
      originAccount: originAccount.number,
      awaitBalance: !hasAvailableBalance(originAccount, transferData)
    };

    const transfers = [...state.transfers, body];

    return { transfers };
  },
  resetFields: _ => {
    return {
      favoredData: {},
      transferData: {}
    };
  }
});
