import { unFormatNumber } from "../formatNumber";

export const isToday = date => {
  return new Date().toDateString() === new Date(date).toDateString();
};

export const checkValue = value => {
  if (value) {
    return unFormatNumber(value) > 0;
  }
  return null;
};

export const checkTypeOfDocument = value => {
  if (value) {
    return value.length > 2;
  }
  return null;
};

export const checkTypeOfTransaction = value => {
  if (value) {
    return value.length > 2;
  }
  return null;
};

export const checkFavored = favored => {
  if (favored) {
    return favored.length > 5;
  }
  return null;
};

export const checkBank = bank => {
  if (bank) {
    return bank.length > 2;
  }
  return null;
};


export const checkAgency = agency => {
  if (agency) {
    return agency.length > 2;
  }
  return null;
};

export const checkAccount = account => {
  if (account) {
    return account.length > 2;
  }
  return null;
};

export const availableBalance = (originAccount, transferData, typeOfTransaction) => {
  let value = Number.parseFloat(unFormatNumber(transferData.value));
  if(typeOfTransaction === "debit") {
    value = value * -1;
  }
  const balance = Number.parseFloat(originAccount.availableBalance);
  return balance + value;
};
