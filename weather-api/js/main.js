const img = document.querySelector("img");

async function cityWeather(city, f) {
  try {
    let weather;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${f}&appid=688a4e3c5e1b431151d93cedc4052081`,
      {
        mode: "cors",
      }
    );
    const data = await response.json();
    console.log(data);
    return (weather = {
      city: data.name,
      country: data.sys.country,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      temperature: data.main.temp,
      max_temp: data.main.temp_max,
      min_temp: data.main.temp_min,
      description: data.weather[0].description,
      wind: data.wind.speed,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    });
  } catch (err) {
    throw new Error(err);
  }
}

function cityName(city) {
  const weatherContainer = document.querySelector("#weather-container");

  const description = document.createElement("div");
  description.id = "description";
  description.innerHTML = city.description.toUpperCase();

  const location = document.createElement("div");
  location.id = "location";
  location.innerHTML = `${city.city.toUpperCase()}, ${city.country.toUpperCase()}`;

  const temp = document.createElement("div");
  temp.id = "temp";
  temp.innerHTML = `${Math.round(city.temperature)}`;

  const tempSymbol = document.createElement("span");
  tempSymbol.innerHTML = "°F";

  const detailsContainer = document.createElement("div");
  detailsContainer.id = "details-container";

  const feelsLike = document.createElement("div");
  feelsLike.id = "feels-like";
  feelsLike.innerHTML = `FEELS LIKE: ${Math.round(city.feels_like)}°F`;

  const humidity = document.createElement("div");
  humidity.id = "humidity";
  humidity.innerHTML = `HUMIDITY: ${city.humidity}`;

  const wind = document.createElement("div");
  wind.id = "wind";
  wind.innerHTML = `WIND: ${Math.round(city.wind)} MPH`;

  const maxTemp = document.createElement("div");
  maxTemp.id = "max-temp";
  maxTemp.innerHTML = `MAX TEMP: ${Math.round(city.max_temp)}°F`;

  const minTemp = document.createElement("div");
  minTemp.id = "min-temp";
  minTemp.innerHTML = `MIN TEMP: ${Math.round(city.min_temp)}°F`;

  const sunRise = document.createElement("div");
  sunRise.id = "sun-rise";
  sunRise.innerHTML = `SUNRISE: ${riseSet(city.sunrise)}`;

  const sunSet = document.createElement("div");
  sunSet.id = "sun-set";
  sunSet.innerHTML = `SUNSET: ${riseSet(city.sunset)}`;

  if (riseSet(city.sunset) < Date.now()) {
    console.log(`${city.sunset} ${Date.now()}`);
    const main = document.querySelector("#main-container");
    main.style.backgroundImage = 'url("./css/imgs/stars.jpg")';
    main.style.backgroundPosition = "center";
    main.style.backgroundRepeat = "no-repeat";
  } else {
    const main = document.querySelector("#main-container");
    main.style.backgroundImage = 'url("./css/imgs/day.jpg")';
    main.style.backgroundPosition = "center";
    main.style.backgroundRepeat = "no-repeat";
  }
  weatherContainer.appendChild(description);
  weatherContainer.appendChild(location);
  weatherContainer.appendChild(temp);
  temp.appendChild(tempSymbol);
  weatherContainer.appendChild(detailsContainer);
  detailsContainer.appendChild(feelsLike);
  detailsContainer.appendChild(humidity);
  detailsContainer.appendChild(wind);
  detailsContainer.appendChild(maxTemp);
  detailsContainer.appendChild(minTemp);
  detailsContainer.appendChild(sunRise);
  detailsContainer.appendChild(sunSet);
}

function riseSet(sun) {
  return new Date(sun * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function createApp() {
  const mainContainer = document.createElement("div");
  mainContainer.id = "main-container";

  const weatherContainer = document.createElement("div");
  weatherContainer.id = "weather-container";

  const searchContainer = document.createElement("div");
  searchContainer.id = "search-container";

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(weatherContainer);
  mainContainer.appendChild(searchContainer);
}

function city(city, measurement) {
  Promise.resolve(cityWeather(city, measurement)).then((weather) => {
    const weatherContainer = document.querySelector("#weather-container");

    cityName(weather);

    const name = document.querySelector("#city");
  });
}

createApp();
city("los angeles", "imperial");
// const cityObj = Promise.resolve(denver).then(weatherContent);
// Promise.all([
//   cityWeather("los angeles", "imperial"),
//   cityWeather("los angeles", "metric"),
// ]);
// cityWeather("los angeles", "imperial");
// const denver = cityWeather("denver", "imperial");
