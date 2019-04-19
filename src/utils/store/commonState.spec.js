import commonState from "./commonState";

describe("commonState", () => {
  it("Should return the state", () => {
    expect(commonState).toEqual({
      originAccount: {
        number: "1123-A",
        availableBalance: 10000,
        givenName: "Yuri",
        surName: "Ramos",
        document: "11111111"
      },
      transfers: JSON.parse(localStorage.getItem("transfers")) || [],
      favoredData: {},
      transferData: {}
    });
  });
});
