export async function showWeather(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=name%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cicon&key=XVSBD3GNB2ZMDGLTDDA9ACY92&contentType=json`,
    { mode: "cors" }
  );
  
}

//tre sa iau city , temperature ,feels like
//humidity , wind si gif sau poza cu starea vremii
//adica soare,nor etc
