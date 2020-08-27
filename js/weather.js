// Get Weather API Function
document.querySelector('.get-weather').onclick = getWeather

function getWeather() {
  const apiKey = '8fccd9a5790e18a0df5eb2dedd85ff19'
  const city = document.querySelector('.textInput').value
  const units = 'imperial'
  const url = `http://openweathermap.org/img/wn/`
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&icon=04d`).then((res) => {
    document.querySelector('.get-weather-list').innerHTML = ` 
          <p class="list">The tempeture in ${city} is ${res.data.main.temp}F <img src=${url + res.data.weather[0].icon + '@2x.png'} /></p>
          <p class="list">Feels like ${res.data.main.feels_like} F</p> 
          <p class="list">The weather is currently ${res.data.weather[0].description}</p>
          <p class="list">The humidity is ${res.data.main.humidity}%</p>
          <p class="list">The minimum tempeture is ${res.data.main.temp_min}F 
          and the max tempeture is ${res.data.main.temp_max}F</p>
          `
  })
}

// Background Color
const randomColor = '0123456789ABCDEF'
document.querySelector('.changeBackground').addEventListener('click', colorChanger);

function colorChanger() {
  let randomCol = ""
  for (let i = 0; i < 6; i++) {
    randomCol += randomColor[Math.floor(Math.random() * 16)]
  }
  document.body.style.backgroundColor = "#" + randomCol;
}

// Google Maps
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}