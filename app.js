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

const elementsToToggle = [prjDownArrow, lightMode,...header,...h1, ...sections, ...aLinks, ...titles, ...skillIcons, ...socialIcon, ...p, ];

// const goDark = document.getElementById('goDark');


lightMode.addEventListener('click', function(){
  lightMode.classList.toggle('active');
  elementsToToggle.forEach(element => element.classList.toggle('light'));

  const changeToLight = document.createElement('p');
  const ulToAppend = document.getElementById('#text')

  if (goDark.innerHTML === "go light") {
    goDark.innerHTML = "go dark";
  } else {
    goDark.innerHTML = "go light";
  }

});
