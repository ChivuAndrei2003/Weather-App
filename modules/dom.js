import { convertTemp } from "./tempConvert.js";
import { showWeather } from "./apiRequest.js";
export const switchBtn = document.getElementById("switch-temp");

let temp = "celsius";

switchBtn.addEventListener("click", () => {
  // alert("switch clicked");
  let currentTemp =
    temp === "celsius" ? (temp = "fahrenheit") : (temp = "celsius");
  convertTemp(currentTemp , );
});
const form = document.querySelector("form");
export const searchInput = document.getElementById("search-input");


export function handleSearch(e) {
  e.preventDefault();
  const searchValue = searchInput.value.trim(); 
  showWeather(searchValue);
  console.log(searchValue);
}

form.addEventListener("submit", handleSearch);
