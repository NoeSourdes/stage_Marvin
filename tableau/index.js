let array = [];
array.push("cat");
array.push("dog");
array.push("bird");
console.log(array);
array.splice(0, 2);
console.log(array);

let vegetables = ["carrot", "tomato", "cucumber", "pepper"];
let fruits = ["apple", "banana", "orange", "pear"];

let vegetableAndFruit = [...vegetables, ...fruits];
console.log(vegetableAndFruit);

for (phrasing of vegetableAndFruit) {
  console.log("j'aime les " + phrasing);
}

vegetableAndFruit[3] = "pumpkin";
vegetableAndFruit[6] = "apricots";
console.log(vegetableAndFruit);

for (phrasing of vegetableAndFruit) {
  console.log("j'aime les " + phrasing);
}
const vegetablesAndFruits = vegetableAndFruit.map((label) => label + "s");
console.log(vegetablesAndFruits);

for (phrasing of vegetablesAndFruits) {
  console.log("j'aime les " + phrasing);
}

const filterVegetablesAndFruits = vegetablesAndFruits.filter(
  (label) => label.length > 7
);
console.log(filterVegetablesAndFruits);
