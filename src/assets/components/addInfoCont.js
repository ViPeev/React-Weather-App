import React from "react";
import AddInfoBox from "./addInfoBox";
import {
  faDroplet,
  faGauge,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function AddInfo({ data }) {
  let mainData = data.main;
  let windData = data.wind.speed;

  let boxData = [
    { descr: "Humidity", descrVal: `${mainData.humidity} RH`, icon: faDroplet},
    { descr: "Pressure", descrVal: `${mainData.pressure} Pa`, icon: faGauge},
    { descr: "Max temp", descrVal: `${mainData.temp_max} C`, icon: faTemperatureArrowUp},
    { descr: "Min temp", descrVal: `${mainData.temp_min} C`, icon: faTemperatureArrowDown},
    { descr: "Wind Speed", descrVal: `${windData} km/h`, icon: faWind},
  ];

  let display = boxData.map( (elem,index) => {
    return <AddInfoBox key={index} data={elem} />
  });

  return (
    <div className="add-info">
      {display}
    </div>
  );
}

export default AddInfo;
