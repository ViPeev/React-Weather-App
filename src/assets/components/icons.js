import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudBolt,
  faSnowflake,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

let icons = {
  "01d": faSun,
  "01n": faMoon,
  "02d": faCloudSun,
  "02n": faCloudMoon,
  "03d": faCloud,
  "03n": faCloud,
  "04d": faCloud,
  "04n": faCloud,
  "09d": faCloudShowersHeavy,
  "09n": faCloudShowersHeavy,
  "10d": faCloudRain,
  "10n": faCloudRain,
  "11d": faCloudBolt,
  "11n": faCloudBolt,
  "12d": faSnowflake,
  "12n": faSnowflake,
  "50d": faSmog,
  "50n": faSmog,
};

function Icon({ handleId }) {
  return <FontAwesomeIcon icon={icons[handleId]} />;
}

export default Icon;
