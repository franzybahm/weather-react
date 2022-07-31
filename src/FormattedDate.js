import React from "react";

export default function formatDate(props){
    let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let x = props.date.getDay();
    let day = days[x];

    let hour = props.date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minute = props.date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return (
    <div>
        {day} {hour}:{minute}
    </div>
  )
  }