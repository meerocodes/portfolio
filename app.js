const lightMode = document.getElementById('lightChange');
const sections = document.getElementsByTagName('section');
const header = document.getElementsByTagName('header');
const aLinks = document.querySelectorAll('a');
const titles = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');
const socialIcon = document.getElementsByClassName('socialIcon');
const skillIcons = document.getElementsByClassName('skillIcon');
const elementsToToggle = [lightMode,...header,...h1, ...sections, ...aLinks, ...titles, ...skillIcons, ...socialIcon];

lightMode.addEventListener('click', function(){
  lightMode.classList.toggle('active');
  elementsToToggle.forEach(element => element.classList.toggle('light'));
});
