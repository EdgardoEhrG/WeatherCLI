import axios from "axios";

import { getKeyValue, TOKEN_DICTIONARY } from "./storage.mjs";

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  if (!token) {
    throw new Error(
      "API key is undefined, please enter api key by using -t [API_KEY]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );
  return data;
};

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "🌞";
    case "02":
      return "🌤";
    case "03":
      return "🌥";
    case "04":
      return "☁️";
    case "09":
      return "🌧";
    case "10":
      return "🌦";
    case "11":
      return "⛈";
    case "13":
      return "❄️";
  }
};

export { getWeather, getIcon };
