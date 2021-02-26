export const localCurency = (num, contryCode, currencyName) => (
   new Number(num).toLocaleString(contryCode) + ' ' + currencyName
);