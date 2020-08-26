// document.querySelector('.get-joke').onclick = getJoke
document.querySelector('.get-weather').onclick = getWeather


// function getJoke(){
//     axios.get('https://api.icndb.com/jokes/random/').then((res)=>{
//           document.querySelector('.get-joke-list').innerHTML += `<li class="list">${res.data.value.joke}</li>`  
//         })
// }

function getWeather(){
  const apiKey = '8fccd9a5790e18a0df5eb2dedd85ff19'
  const city = document.querySelector('.textInput').value
  const units = 'imperial'
  const url = `http://openweathermap.org/img/wn/`
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&icon=04d`).then((res)=>{
      // console.log(res.data.main.temp)
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
  for(let i = 0; i < 6; i++) {
    randomCol += randomColor[Math.floor(Math.random() * 16)]
  }
  document.body.style.backgroundColor = '#' + randomCol;
}