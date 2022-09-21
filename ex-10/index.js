const { randomInt } = require("crypto");
const prompts = require("prompts");

async function main() {
  while (true) {
    const min = await askMinimum();
    const max = await askMaximum(min);
    const numberToGuess = randomInt(min, max);
    console.log(numberToGuess);

    let attempt = 0;
    while (true) {
      const response = await askNumber(min, max);
      attempt++;
      if (response === numberToGuess) {
        console.log("Won");
        console.log(`${attempt} ${attempt > 1 ? "attempts" : "atte%mpt"}`);
        const replay = await askPlayAgain();
        if (replay) {
          break;
        }
        return;
      }
      if (response > numberToGuess) {
        console.log("less");
      } else {
        console.log("more");
      }
    }
  }
}
async function askNumber(min, max) {
  const response = await prompts({
    type: "number",
    name: "value",
    message: `choose a number between ${min} and ${max} ?`,
    validate: (value) =>
      value < min || value > max
        ? `choose a number between ${min} and ${max}`
        : true,
  });
  return response.value;
}
async function askPlayAgain() {
  const replay = await prompts({
    type: "toggle",
    name: "value",
    message: "do you want to play again ?",
    initial: true,
    active: "yes",
    inactive: "no",
  });
  return replay.value;
}
async function askMinimum() {
  const min = await prompts({
    type: "number",
    name: "value",
    message: "give me a number ?",
    initial: 0,
    style: "default",
  });
  return min.value;
}
async function askMaximum(min) {
  const max = await prompts({
    type: "number",
    name: "value",
    message: "give me a second number ?",
    initial: 0,
    style: "default",
    validate: (number) =>
      number <= min ? "false, the number is too small" : true,
  });
  return max.value;
}

main();
