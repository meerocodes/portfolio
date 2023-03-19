const lightMode = document.getElementById('lightChange');
const sections = document.getElementsByTagName('section');
const header = document.getElementsByTagName('header');
const aLinks = document.querySelectorAll('a');
const titles = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');
const socialIcon = document.getElementsByClassName('socialIcon');
const skillIcons = document.getElementsByClassName('skillIcon');
const p = document.querySelectorAll('p');
const arrow = document.getElementById('topArrow');
const arrowDown = document.getElementById('prjDownArrow');
const socials = document.getElementsByClassName('socials');
const arrowRight = document.getElementsByClassName('arrowRight');
const span = document.getElementsByTagName('span');

const elementsToToggle = [prjDownArrow, lightMode,...header,...h1, ...sections, ...aLinks, ...titles, ...skillIcons, ...socialIcon, ...p, ...socials, ...arrowRight, ...span];

const goDark = document.getElementById('goDark');


lightMode.addEventListener('click', toggleLightMode);

lightMode.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    toggleLightMode();
  }
});

function toggleLightMode() {
  lightMode.classList.toggle('active');
  elementsToToggle.forEach(element => element.classList.toggle('light'));

  const changeToLight = document.createElement('p');
  const ulToAppend = document.getElementById('#text')

  if (goDark.innerHTML === "go light") {
    goDark.innerHTML = "go dark";
  } else {
    goDark.innerHTML = "go light";
  }
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');


});


const socialArrow = document.querySelector('.socialsArrow');
const arrowIcon = socialArrow.querySelector('.arrowRight');

socialArrow.addEventListener('click', () => {
    socialArrow.classList.toggle('active');
    
    if (arrowIcon.classList.contains('fa-chevron-right')) {
        arrowIcon.classList.remove('fa-chevron-right');
        arrowIcon.classList.add('fa-chevron-left');
      } else {
        arrowIcon.classList.remove('fa-chevron-left');
        arrowIcon.classList.add('fa-chevron-right');
      }





});


