// Variables 
const container = document.querySelector('.skills');
const profilePic = document.querySelector('.profile-pic');
const h2Headers = document.querySelector('.hireme');


// Logos Function
container.addEventListener('mouseover', function() {
  // console.log('hihihih')
  this.classList.add('shake-animation');
})
container.addEventListener('mouseleave', function() {
  this.classList.remove('shake-animation');
})

// Proficle Pic Rotation Function
profilePic.addEventListener('mouseover', function() {
  // console.log('hello')
  this.classList.add('hover');
})

// Header H2 functions
h2Headers.addEventListener('click', function() {
  // console.log("jgsega")
  this.classList.add('zoom')
})