export const isValidAmount = function (p_amount) {
  return Number.isFinite(p_amount) && p_amount > 0;
};

export const calculateNewCurrency = function (p_currency, p_rate) {
  p_currency.newAmount = (p_currency.oldAmount * p_rate).toFixed(2);
};
