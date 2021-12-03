import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from "./services/log.mjs";
import {
  saveKeyValue,
  TOKEN_DICTIONARY,
  getKeyValue,
} from "./services/storage.mjs";
import { getWeather, getIcon } from "./services/api.mjs";

import { getArgs } from "./helpers/args.mjs";

import dotenv from "dotenv";
dotenv.config();

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token was not sent");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token is saved");
  } catch (error) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City was not sent");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City is saved");
  } catch (error) {
    printError(e.message);
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error.response.status === 404) {
      printError("Incorrect city");
    } else if (error.response.status === 401) {
      printError("Incorrect token");
    } else {
      console.log(error);
    }
  }
};

initCLI();
