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