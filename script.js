"use strict";

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const filterFunct = (arr) => {
  return arr.filter((e) => Number.isInteger(e));
};

const notDuplicated = (arr) => {
  const uniqueList = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      uniqueList.push(arr[i]);
    }
  }
  return uniqueList;
};
