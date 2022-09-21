const assert = require("assert");

function isMinor(age) {
  return age < 18;
}

assert(isMinor(21) === false, "A 21 ans on doit pas être mineur");
assert(isMinor(18) === false, "A 18 ans on doit pas être mineur");
assert(isMinor(15) === true, "A 15 ans on doit être mineur");
