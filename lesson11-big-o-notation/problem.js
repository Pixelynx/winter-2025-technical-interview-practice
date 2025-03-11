/**
 * Problem: Implement a function that determines if a given year is a leap year. A leap year is a year that is divisible by 4,
 * but not divisible by 100, unless it is divisible by 400. For example, 2000 is a leap year, but 1900 is not.
 * This should ideally run in O(1) time.
 */

function isLeapYear(year) {
  let divByFour = year % 4;
  let divByHun = divByFour % 100;
  let divBy4Hun = divByHun % 400
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
module.exports = isLeapYear;
