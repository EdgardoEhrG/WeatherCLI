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

const printWeather = (res, icon) => {
  console.log(
    dedent(`
  ${chalk.bgHex(" WEATHER: ")}
  Today in ${res.name}:
  ${icon}  ${res.weather[0].description}
  Temp: ${res.main.temp} (feels like ${res.main.feels_like})
  Humidity: ${res.main.humidity}%
  Speed of wind: ${res.wind.speed}
`)
  );
};

export { printHelp, printSuccess, printError, printWeather };
