/** @param {number} number */
function formatPaginationFraction(number) {
  return number < 10 ? `0${number}` : number;
}

export { formatPaginationFraction };
