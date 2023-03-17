const lightMode = document.getElementById('lightChange');

const header= document.getElementsByTagName('header')[0];
const skills = document.getElementsByTagName('section')[0];
const projects = document.getElementsByTagName('section')[1];
const contact = document.getElementsByTagName('section')[2];

const h1 = document.getElementsByTagName('h1')[0];

const aLinks0 = document.querySelectorAll('a')[0];
const aLinks1 = document.querySelectorAll('a')[1];
const aLinks2 = document.querySelectorAll('a')[2];
const aLinks3 = document.querySelectorAll('a')[3];
const aLinks4 = document.querySelectorAll('a')[4];
const aLinks5 = document.querySelectorAll('a')[5];

const title0 = document.querySelectorAll('h2')[0];
const title1 = document.querySelectorAll('h2')[1];
const title2 = document.querySelectorAll('h2')[2];
const title3 = document.querySelectorAll('h2')[3];

const skills0 = document.getElementsByClassName('skillIcon')[0];
const skills1 = document.getElementsByClassName('skillIcon')[1];
const skills2 = document.getElementsByClassName('skillIcon')[2];
const skills3 = document.getElementsByClassName('skillIcon')[3];
const skills4 = document.getElementsByClassName('skillIcon')[4];
const skills5 = document.getElementsByClassName('skillIcon')[5];
const skills6 = document.getElementsByClassName('skillIcon')[6];
const skills7 = document.getElementsByClassName('skillIcon')[7];
const skills8 = document.getElementsByClassName('skillIcon')[8];
const skills9 = document.getElementsByClassName('skillIcon')[9];
const skills10 = document.getElementsByClassName('skillIcon')[10];
const skills11 = document.getElementsByClassName('skillIcon')[11];



lightMode.addEventListener('click', function(){
    lightMode.classList.toggle('active')
    header.classList.toggle('light')
    skills.classList.toggle('light')
    projects.classList.toggle('light')
    contact.classList.toggle('light')

    h1.classList.toggle('light')

    aLinks0.classList.toggle('light')
    aLinks1.classList.toggle('light')
    aLinks2.classList.toggle('light')
    aLinks3.classList.toggle('light')
    aLinks4.classList.toggle('light')
    aLinks5.classList.toggle('light')

    title0.classList.toggle('light')
    title1.classList.toggle('light')
    title2.classList.toggle('light')
    title3.classList.toggle('light')

    skills0.classList.toggle('light')
    skills1.classList.toggle('light')
    skills2.classList.toggle('light')
    skills3.classList.toggle('light')
    skills4.classList.toggle('light')
    skills5.classList.toggle('light')
    skills6.classList.toggle('light')
    skills7.classList.toggle('light')
    skills8.classList.toggle('light')
    skills9.classList.toggle('light')
    skills10.classList.toggle('light')
    skills11.classList.toggle('light')
})