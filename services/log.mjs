import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(`${chalk.bgRed("Error:")} ${error}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.bgGreen("Success:")} ${msg}`);
};

const printHelp = () => {
  console.log(
    dedent(`
  ${chalk.bgMagenta(" Help: ")}
  Without parametres - print current weather
  -s [CITY] - Set city
  -h - Print help
  -t - token saving
`)
  );
};

export { printHelp, printSuccess, printError };
