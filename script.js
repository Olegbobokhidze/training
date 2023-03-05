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

const dnaToRna = (dna) => {
  let result = [];
  for (let i = 0; i < dna.length; i++) {
    let letter = dna[i];
    if (letter === "T") {
      result.push("U");
    } else if (letter === "U") {
      result.push("T");
    } else {
      result.push(letter);
    }
  }
  const together = result.join("");
  return together;
};
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
