import { Temperature } from "./apiRequest.js";

export function convertTemp(tempUnit, tempValue) {
  let temperatureConverted;

  if (tempUnit === "fahrenheit") {
    temperatureConverted = (tempValue * 9) / 5 + 32;
    Temperature.textContent = `Temperature: ${temperatureConverted.toFixed(1)} °F`;
  } else {
    temperatureConverted = ((tempValue - 32) * 5) / 9;
    Temperature.textContent = `Temperature: ${temperatureConverted.toFixed(1)} °C`;
  }
}


