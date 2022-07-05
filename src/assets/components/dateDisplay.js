import React from "react";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Satuday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DateDisplay({ handleLocalTime }) {
  let dateDisplay;
  let timeDisplay;

  (function dateFunct() {
    const utcString = new Date().toUTCString();
    const utcDate = new Date(
      utcString.substring(0, utcString.lastIndexOf(" "))
    );
    utcDate.setTime(utcDate.getTime() + handleLocalTime * 1000);

    let month = months[utcDate.getMonth()];
    let date = utcDate.getDate();
    let day = days[utcDate.getDay()];
    let hour = utcDate.getHours();
    let minutes = utcDate.getMinutes();

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hour = hour < 10 ? `0${hour}` : hour;

    dateDisplay = `${day}, ${date} ${month}`;
    timeDisplay = `${hour}:${minutes}`;
  })();

  return (
    <React.Fragment>
      <div className="date">
        <time>{dateDisplay}</time>
        <time>{timeDisplay}</time>
      </div>
    </React.Fragment>
  );
}

export default DateDisplay;
