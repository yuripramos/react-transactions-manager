import * as SHIPS_API from "../../services/Ships";

export default () => ({
  AllShips: async (state, n) => {
    const AllShipsRequest = await SHIPS_API.getAllShips(n);
    return {
      isFilled: AllShipsRequest.length > 0,
      shipsArray: AllShipsRequest
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
    console.log("name and val", name, value);
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
  }
  // resetFields: (_, date) => {
  //   return {
  //     originAccount: {},
  //     favoredData: {},
  //     transferData: {
  //       date:
  //         (date && moment(date).format("MM/DD/YYYY")) ||
  //         moment().format("MM/DD/YYYY")
  //     }
  //   };
  // }
});
