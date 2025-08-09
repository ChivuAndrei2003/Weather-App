export const switchBtn = document.getElementById("switch-temp");

let temp = "celsius";

switchBtn.addEventListener("click", () => {
  // alert("switch clicked");
  let currentTemp =
    temp === "celsius" ? (temp = "fahrenheit") : (temp = "celsius");
  //  return alert(currentTemp);
});

export function handleSearch(e) {
  e.preventDefault();
  const searchValue = searchInput.value.trim() ; // Default la "cats" dacă e gol
  showWeather(searchValue);
}

form.addEventListener("submit", handleSearch);
