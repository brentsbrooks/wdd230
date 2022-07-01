const currentTemp = document.querySelector('#temp');
const captionDesc = document.querySelector('#condition');
const weatherIcon = document.querySelector('#weather-icon');
const wind = document.querySelector('#windSpeed');
let chill = document.querySelector('#windChill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Centurion,za&units=imperial&appid=641754df937dbce0a5c28e23226ff0f1';


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }

}

apiFetch();


function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
  const desc = weatherData.weather[0].description;
  captionDesc.textContent = capitalize(desc);
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  wind.innerHTML = weatherData.wind.speed;

  // windchill
  const temperature = weatherData.main.temp
  const windSpeed = weatherData.wind.speed

  function windchill(t, s) {
    if (t <= 50 && s > 3) {
      let wc = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16)  + 0.4275 * t * (s ** 0.16)
      return wc.toFixed(0)
    } 
    else return "N/A"
  }

  let windChill = windchill(temperature, windSpeed)

  document.querySelector("#windChill").textContent = windChill

  console.log(temperature)
  console.log(windSpeed)

}



const capitalize = (str) => {
  let strArr = str.split(" ");
  return strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}




