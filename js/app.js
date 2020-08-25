// Variables 
// const profilePic = document.querySelector('.profile-pic');
const h2Headers = document.querySelector('.hireme');
const nameLogo = document.querySelector('.header-logo')

// Logos Function
const logos = document.querySelectorAll('.code-languages');
for(let i = 0; i < logos.length; i++){
  const skills = logos[i];
  skills.onmouseover = logo;
}

function logo(e) {
  const skills = e.target;
  if(skills !== 'zoom-in') {
    skills.classList.toggle('zoom-in')
  }
}

// // Proficle Pic Rotation Function
// profilePic.addEventListener('mouseover', function() {
//   // console.log('hello')
//   this.classList.add('hover');
// })

// profilePic.addEventListener('mouseleave', function() {
//   // console.log('hello')
//   this.classList.remove('hover');
// })
// Header H2 functions
h2Headers.addEventListener('click', function() {
  // console.log("jgsega")
  this.classList.add('zoom')
})

