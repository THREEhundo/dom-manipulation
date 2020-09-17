import about from './about';
import contact from './contact';
import home from './home';
import menu from './menu';

home();
about();
menu();
contact();

const homeTab = document.querySelector('.home');
const aboutTab = document.querySelector('.about');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

const homeContainer = document.querySelector('#home-container');
const aboutContainer = document.querySelector('#about-container');
const menuContainer = document.querySelector('#menu-container');
const contactContainer = document.querySelector('#contact-container');

homeTab.addEventListener('click', () => {
  homeContainer.style.display = 'block';
  aboutContainer.style.display = 'none';
  menuContainer.style.display = 'none';
  contactContainer.style.display = 'none';
});

aboutTab.addEventListener('click', () => {
  aboutContainer.style.display = 'flex';
  homeContainer.style.display = 'none';
  menuContainer.style.display = 'none';
  contactContainer.style.display = 'none';
});

menuTab.addEventListener('click', () => {
  menuContainer.style.display = 'flex';
  homeContainer.style.display = 'none';
  aboutContainer.style.display = 'none';
  contactContainer.style.display = 'none';
});

contactTab.addEventListener('click', () => {
  contactContainer.style.display = 'flex';
  homeContainer.style.display = 'none';
  aboutContainer.style.display = 'none';
  menuContainer.style.display = 'none';
});

const google = window.google;