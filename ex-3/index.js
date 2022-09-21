const assert = require("assert");

function isEven(number) {
  //   const rest = number % 2;
  //   return rest === 0;
  return number % 2 === 0;
}

assert(isEven(2) === true, "2 est un nombre pair");
assert(isEven(3) === false, "3 est un nombre impair");
