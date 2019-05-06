const commonState = {
  originAccount: {
    number: "1123-A",
    availableBalance: 0,
    givenName: "Yuri",
    surName: "Ramos",
    document: "11111111"
  },
  transfers: JSON.parse(localStorage.getItem("transfers")) || [],
  favoredData: {},
  transferData: {}
};

export default commonState;
