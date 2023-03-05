"use strict";

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const filterFunct = (arr) => {
  return arr.filter((val) => val !== NaN);
};
