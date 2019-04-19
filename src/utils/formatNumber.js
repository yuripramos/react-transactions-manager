export default function formatNumber(value, numberOptions = {}) {
  const options = {};
  if (numberOptions.currency) {
    options.style = "currency";
    options.currency = numberOptions.currency;
  }

  if (numberOptions.digits) {
    options.minimumFractionDigits = numberOptions.digits;
    options.maximumFractionDigits = numberOptions.digits;
  }

  return new Intl.NumberFormat("pt-BR", options).format(value);
}

export function unFormatNumber(value) {
  value = value.toString();

  value = value.replace(/\./g, "");
  value = value.replace(/,/g, ".");

  return parseFloat(value);
}

export function formatCPF(value) {
  return value
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

export function formatCNPJ(value) {
  return value
    .toString()
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5");
}
