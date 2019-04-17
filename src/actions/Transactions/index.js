import * as SHIPS_API from "../../services/Ships";

export default () => ({
  AllShips: async (state, n) => {
    const AllShipsRequest = await SHIPS_API.getAllShips(n);
    return {
      isFilled: AllShipsRequest.length > 0,
      shipsArray: AllShipsRequest
    };
  },
  ShowDetails: (state, id) => {
    const detailedShip = state.shipsArray.find(e => e.id === id);
    return {
      detailedShip
    }
  }

});
