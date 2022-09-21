const { randomInt } = require("node:crypto");
const prompts = require("prompts");

async function main() {
  while (true) {
    const numberToGuess = randomInt(1001);
    while (true) {
      const response = await askNumber();

      if (response === numberToGuess) {
        console.log("won");
        const replay = askPlayAgain();
        if (replay) {
          break;
        }

        return;
      }

      if (response < numberToGuess) {
        console.log("plus");
      } else {
        console.log("moins");
      }
    }
  }
}

async function askNumber() {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "choose a number between 0 and 1000 ?",
    validate: (value) =>
      value < 0 || value > 1000
        ? `false, you need a number between 0 and 1000`
        : true,
  });

  return response.value;
}
async function askPlayAgain() {
  const replay = await prompts({
    type: "toggle",
    name: "value",
    message: "Do you want to play again ?",
    initial: true,
    active: "yes",
    inactive: "no",
  });
  return replay.value;
}

main();
