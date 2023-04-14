const apiKey = "1d8b12fb49bfb881409e94c0eeb4b312";

const lat = 40.7209;
const lon = -74.0007;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

let newDiv = document.createElement('div');
newDiv.id = "weather";

let temperatureElement = document.createElement('p');
temperatureElement.id = "temperature";

let windElement = document.createElement('p');
windElement.id = "wind";

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const tempMin = data.main.temp_min;
    const tempMax = data.main.temp_max;
    const windSpeed = data.wind.speed;
    const windDirection = data.wind.deg;

    newDiv.append("The current temperature in Manhattan is " + temp + "°F");
    temperatureElement.append("Feels like " + feelsLike + "°F");
    newDiv.appendChild(temperatureElement);

    if (temp < 50) {
      document.body.style.backgroundColor = "#00bfff";
      temperatureElement.style.backgroundColor = "#00bfff";
      temperatureElement.style.color = "#000";
      newDiv.append("It's cold outside. Wear a jacket!");
    } else if (temp > 80) {
      document.body.style.backgroundColor = "#ff8c00";
      temperatureElement.style.backgroundColor = "#ff8c00";
      temperatureElement.style.color = "#fff";
      newDiv.append("It's hot outside. Stay hydrated!");
    } else {
      document.body.style.backgroundColor = "#ff0000";
      temperatureElement.style.backgroundColor = "#ff0000";
      newDiv.append("It's warm outside. Enjoy the weather!");
    }

    windElement.innerHTML = `Wind speed: ${windSpeed} mph, Wind direction: ${windDirection} degrees`;
    newDiv.appendChild(windElement);
  })
  .catch(error => {
    console.error(error);
  });

document.body.appendChild(newDiv);
