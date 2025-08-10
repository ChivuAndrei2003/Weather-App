import { form, handleSearch, searchInput, TEMP, switchBtn } from "./dom.js";
const Img = document.getElementById("weather-icon");
const CITY = document.getElementById("city");
const Temperature = document.getElementById("temperature");
const FeelsLike = document.getElementById("feels-like");
const Humidity = document.getElementById("humidity");
const Wind = document.getElementById("wind");


const ICON_BASE =
  "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color";
const iconUrl = (id) => `${ICON_BASE}/${id}.svg`; // ex: clear-day.svg, rain.svg


export async function showWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bucharest?unitGroup=metric&elements=name%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cicon&key=XVSBD3GNB2ZMDGLTDDA9ACY92&contentType=json`,
      { mode: "cors" }
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    console.log(data);

    const temperature = data.currentConditions.temp;
    Temperature.textContent += temperature;

    const city = data.timezone;
    CITY.textContent += city;

    const feelsLIKE = data.currentConditions.feelslike;
    FeelsLike.textContent += feelsLIKE;

    const humidity = data.currentConditions.humidity;
    Humidity.textContent += humidity;

    const windSpeed = data.currentConditions.windspeed;
    Wind.textContent += windSpeed;
    
    Img.src = iconUrl(data.currentConditions.icon);  // ex. .../partly-cloudy-day.svg
    Img.alt = data.currentConditions.icon;
    
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

showWeather("");
//tre sa iau city , temperature ,feels like
//humidity , wind si gif sau poza cu starea vremii
//adica soare,nor etc

//let svgForShowWeather = [];
