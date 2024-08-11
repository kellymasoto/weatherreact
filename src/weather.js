import React from "react";
import axios from "axios";
import loader from "react-loader-spinner";

export default function weather(props) {
  function handleResponse(response) {
    alert(
      "The weather in ${response.data.name} is ${response.data.main.temp}Degrees celcius"
    );
  }
  let apiKey = "b9ba0314a93083136d968577c718e31d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
  return <Hello from Weather />;
}
