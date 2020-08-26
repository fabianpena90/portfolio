//Welcome Message
const btn = document.querySelector('.btn-portfolio');
btn.addEventListener('click', clickMe);

function clickMe() {
  const name = prompt("What's your name");
  alert(`Welcome ${name} to my Portfolio`)
}

// Profile pic 
const profilePic = document.querySelector('.profile-pic');
profilePic.addEventListener('mouseover', profilePicture);

function profilePicture(e) {
  const pic = e.target;
if(pic !== 'pictureMe'){
  pic.classList.toggle('pictureMe')
}
}

// Social Media Function
const logos = document.querySelectorAll('.footerLogos');
for(let i = 0; i < logos.length; i++){
  const skills = logos[i];
  skills.onmouseover = logo;
}

function logo(e) {
  const skills = e.target;
  if(skills !== 'footer') {
    skills.classList.toggle('footer')
  }
}

// Game Function
let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let p = document.querySelector("p");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 10;

p1Button.addEventListener("click", function (){
    if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      gameOver = true;
      alert('You Won!!!')
    }
    p1Display.textContent = p1Score;
    } 
    
});

p2Button.addEventListener("click", function (){
    if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
        gameOver = true;
        alert('You Won!!!')
        }
    p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener("click", function() {
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
}

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});