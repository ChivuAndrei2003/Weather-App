import { convertTemp } from "./tempConvert.js";
import { showWeather, Temperature } from "./apiRequest.js";

export const switchBtn = document.getElementById("switch-temp");
export const form = document.querySelector("form");
export const searchInput = document.getElementById("search-input");

export let TEMP = "celsius";
export let convertedTEMP;

switchBtn.addEventListener("click", () => {
  TEMP = TEMP === "celsius" ? "fahrenheit" : "celsius";

  // Extract the temperature value  from HTML doc
  let stringToNum = Temperature.textContent.replace(/[^0-9.\-]/g, "");
  convertedTEMP = parseFloat(stringToNum);
  
  // 
  if (!isNaN(convertedTEMP)) {
    convertTemp(TEMP, convertedTEMP);
  }
});

export function handleSearch(e) {
  e.preventDefault();
  const searchValue = searchInput.value.trim(); 
  if (searchValue) {
    showWeather(searchValue);
    searchInput.value = ""; // clean up the input
  }
}

form.addEventListener("submit", handleSearch);