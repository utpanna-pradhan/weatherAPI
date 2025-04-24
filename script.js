const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector("weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");
const cityHide = document.querySelector(".city-hide");
search.addEventListener("click", () => {
  const APIKey = "b0d3a4d2814ed64c0f708a34dd320605";
  const city = document.querySelector(".search-box input").value;
  if (city == "") {
    return;
  }
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./images/clear.png";
          break;
        case "Rain":
          image.src = "./images/rain.png";
          break;
        case "Mist":
          image.src = "./images/mist.png";
          break;
        case "Snow":
          image.src = "./images/snow.png";
          break;
        case "Cloud":
          image.src = "./images/cloud.png";
          break;
        default:
          image.src = "./images/cloud.png";
      }
      temperature.innerHTML=`${parseInt(json.main.temp)}<span><sup>0</sup>c</span>`;
      description.innerHTML=`${json.weather[0].description}`;
      humidity.innerHTML=`${json.main.humidity}%`;
      wind.innerHTML=`${parseInt(json.wind.speed)}KM/hr`;
    });
});
