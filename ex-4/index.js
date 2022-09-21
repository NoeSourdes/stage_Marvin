const assert = require("assert");

function calculateArea(sideLength, sideWidth) {
  return (sideLength * sideWidth) / 2;
}

assert(calculateArea(10, 50) === 250, "l'aire du triangle doit être de 250");
assert(calculateArea(20, 50) === 500, "l'aire du triangle doit être de 500");
