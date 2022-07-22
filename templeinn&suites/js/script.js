// -----HEADER-----

// Navigation
function toggleMenu(){
  document.querySelector("#primaryNav").classList.toggle("open");
  document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// -----FOOTER-----

// Copyright Year
const year = new Date();
document.querySelector('#year').innerHTML = year.getFullYear();

// Last Updated
const oLastModif = new Date(document.lastModified);
document.querySelector('#modified').innerHTML = oLastModif;

// --------------Home----------------

// Current Weather
const currentTemp = document.querySelector('#temp');
const captionDesc = document.querySelector('#condition');
const weatherIcon = document.querySelector('#weather-icon');
const currentHumidity = document.querySelector('#humidity')

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-26.10&lon=28.10&exclude=minutely,hourly&units=metric&appid=641754df937dbce0a5c28e23226ff0f1'

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

apiFetch()

function displayResults(weatherData) {
  currentTemp.innerHTML = `${weatherData.current.temp.toFixed(0)}`;
  const desc = weatherData.current.weather[0].description;
  captionDesc.textContent = capitalize(desc);
  currentHumidity.textContent = `${weatherData.current.humidity}`;
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
}

const capitalize = (str) => {
  let strArr = str.split(" ");
  return strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  
}