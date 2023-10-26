export const formatNumber = (number: string) => {
  const strNumber = number.toString();

  const digits = strNumber.split('');

  const formattedDigits = [];

  for (let i = digits.length - 1, j = 0; i >= 0; i -= 1, j += 1) {
    if (j % 3 === 0 && j !== 0) {
      formattedDigits.unshift(',');
    }
    formattedDigits.unshift(digits[i]);
  }

  return formattedDigits.join('');
};
