import React from "react";
import DateDisplay from "./dateDisplay";
import Icon from "./icons";
import AddInfo from "./addInfoCont";
import ErrorPrompt from "./errorPrompt";

function Display({ handleData }) {
  if (!handleData) {
    return (
      <main className="prompt-container blur">
        <p>Enter the desired location</p>
      </main>
    );
  } 

  if (handleData === "Error") {
    return <ErrorPrompt />;
  }

  let icon = handleData.weather[0].icon;
  let weather = handleData.weather[0].main;
  let feelsLike = Math.round(handleData.main.feels_like);
  let temp = Math.round(handleData.main.temp);
  let city = `${handleData.name}, ${handleData.sys.country}`;
  let localTime = handleData.timezone;

  return (
    <React.Fragment>
      <main className="main-container blur">
        <div className="grid-data-container">
          <div className="city-info">
            <h1 className="city-name text-outline">{city}</h1>
            <DateDisplay handleLocalTime={localTime} />
          </div>
          <div className="weather-info">
            <div className="box">
              <div className="temp text-underline">{temp} &#x2103;</div>
              <div className="feels">Feels like {feelsLike} &#x2103;</div>
            </div>
            <div className="box">
              <Icon handleId={icon} />
              <div className="text-inderline">{weather}</div>
            </div>
          </div>
          <AddInfo data={handleData} />
        </div>
        <div className="bg-blur"></div>
      </main>
    </React.Fragment>
  );
}

export default Display;
