// Given a year, return the century it is in.
// For example:
// year = 1905, the output should be
// centuryFromYear(year) = 20;
// year = 1700, the output should be
// centuryFromYear(year) = 17.

function centuryFromYear(year) {
    // if year = 1700, then 1700/100 the output will be 17
    // return year/100;
    // there are scenarios when we need to round up the number for example when the
    // year is 1905, the output should be 20.
    // how to round up a number in js?
    return Math.ceil(year/100);
}
