const prompts = require("prompts");

(async () => {
  const response = await prompts({
    type: "number",
    name: "value",
    message: "choose a number between 0 and 1000 ?",
    validate: (value) =>
      value < 0 || value > 1000
        ? `false, you need a number between 0 and 1000`
        : true,
  });

  console.log(response);
})();
