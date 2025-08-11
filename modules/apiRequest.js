const Img = document.getElementById("weather-icon");
const CITY = document.getElementById("city");
export const Temperature = document.getElementById("temperature");
const FeelsLike = document.getElementById("feels-like");
const Humidity = document.getElementById("humidity");
const Wind = document.getElementById("wind");
const searchResultCard = document.querySelector(".search-result");

// this is for getting svg's (online ) for our search result card
const ICON_BASE =
  "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color";
const iconUrl = (id) => `${ICON_BASE}/${id}.svg`; // ex: clear-day.svg, rain.svg

export async function showWeather(city) {
  try {
    const cityToSearch = city || "Bucharest";

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=name%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cicon&key=XVSBD3GNB2ZMDGLTDDA9ACY92&contentType=json`,
      { mode: "cors" }
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data);
    CITY.textContent = `City: ${data.resolvedAddress || data.address}`;
    Temperature.textContent = `Temperature: ${data.currentConditions.temp} °C`;
    FeelsLike.textContent = `Feels like: ${data.currentConditions.feelslike} °C`;
    Humidity.textContent = `Humidity: ${data.currentConditions.humidity}%`;
    Wind.textContent = `Wind speed: ${data.currentConditions.windspeed} km/h`;

    Img.src = iconUrl(data.currentConditions.icon); // ex. .../partly-cloudy-day.svg
    Img.alt = data.currentConditions.icon;

    searchResultCard.classList.add("visible");
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);

    CITY.textContent = `City: ${city || "Unknown"}`;
    Temperature.textContent = "Temperature: Unable to load data";
    FeelsLike.textContent = "Feels like: --";
    Humidity.textContent = "Humidity: --";
    Wind.textContent = "Wind speed: --";
    Img.src = "";
    Img.alt = "Error";
    
    // Show the search card with the error
    searchResultCard.classList.add("visible");
  }
}


