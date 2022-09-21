const chalk = require("chalk");
var error = chalk.bold.red;

console.log(chalk.blue("hello world"));

console.log(chalk.blue("Hello"), "World" + chalk.red("!"));

console.log(chalk.blue.bgRed.bold("Hello World"));

console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

console.log(chalk.green("Hello", "World!", "Foo", "bar", "biz", "baz"));

console.log(error("Error!"));
