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
    });
  } catch (err) {
    throw new Error(err);
  }
}
// Promise.all([
//   cityWeather("los angeles", "imperial"),
//   cityWeather("los angeles", "metric"),
// ]);
const lA = cityWeather("los angeles", "imperial");
const denver = cityWeather("denver", "imperial");

function weatherContent(city, container) {
  const weatherContainer = document.querySelector("#weather-container");
  const location = document.createElement("div");
  location.id = "location";
  location.innerHTML = `${city.city}, ${city.country}`;
  weatherContainer.appendChild(location);
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

createApp();
const cityObj = Promise.resolve(denver).then(weatherContent);
