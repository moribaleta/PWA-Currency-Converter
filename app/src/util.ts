export const convertCurrency = (
  amount: number,
  fromRate: number,
  toRate: number,
) => {
  if (fromRate === toRate) {
    return amount; // No conversion needed, return the same amount
  }

  // Convert the amount from the source currency to the US dollar, then from the US dollar to the target currency
  const convertedAmount = (amount / fromRate) * toRate;
  return convertedAmount;
};
