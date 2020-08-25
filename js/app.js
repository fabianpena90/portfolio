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

