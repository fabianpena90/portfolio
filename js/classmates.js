// Students Data Functiom
window.addEventListener('load', getData)

function getData(){
  axios.get('https://ironrest.herokuapp.com/mia-aug2020-webdevs').then(res =>{
    //  console.log(res.data);
          const data = res.data;
          for(let i = 0; i < data.length; i++) {
            // console.log(data[i].last_name)
            document.querySelector('.studentsList').innerHTML += `
            <li class="data">${data[i].first_name} ${data[i].last_name}
            <span class="data"><a class="dataList" href="${data[i].website}" target="_blank">Portfolio</a></span>
            </li>
            
            `
          
            }
          })
}

//  Giphy Function
window.addEventListener('load', giphy);

function giphy() {
  axios.get('https://api.giphy.com/v1/gifs/search?api_key=2ICucThirLQrhOZGPbsFaOYZYSEwdggQ&q=silicon valley&limit=25&offset=0&rating=g&lang=en').then((res) => {
    // console.log(res.data.data)
    const data = res.data.data;
    const randomGif = Math.floor(Math.random() * data.length);
    const url = data[randomGif].embed_url;

    document.querySelector('.gif').innerHTML += `<iframe class="gif" src="${url}" width="480" height="338" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/silicon-valley-rrj7FpUH9BlK0"></a>`
  })
}

// Guess a Number Function
document.querySelector('.btn-game').addEventListener('click', checkGuess)

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let inputGame = document.querySelector('.inputGame');
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(inputGame.value);
  // console.log(userGuess)
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
 
  if (userGuess === randomNumber) {
    lastResult.textContent = 'You are smart enough to hav guessed a Number';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'JA JA You Lost!!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong! JA JA';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Cold too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Cold too high!';
    }
  }
 
  guessCount++;
  inputGame.value = '';
  inputGame.focus();
}

function setGameOver() {
  inputGame.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  inputGame.disabled = false;
  inputGame.value = '';
  inputGame.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}