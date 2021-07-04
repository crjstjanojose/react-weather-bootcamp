import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { WeatherData } from "../api/Entities/EntityDefinition";
import { weatherQuery } from "../api/queries";
import { checkedCityAtom } from "../global";

export const useWeatherDisplay = () => {
  const [cityChecked] = useAtom(checkedCityAtom);
  const url = `http://api.openweathermap.org/data/2.5/weather?id=${cityChecked}&units=metric&lang=pt_br&appid=d1a99909fe5f85bd7a8ffa8011aca72f`;
  const { isFetching, data } = useQuery<WeatherData>(
    weatherQuery(cityChecked),
    () => fetch(url).then((response) => response.json())
  );
  return { isFetching, data };
};
