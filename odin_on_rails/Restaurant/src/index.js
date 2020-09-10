import about from './about';
import contact from './contact';
import home from './home';
import menu from './menu';

home();
// about();
// contact();
// menu();
const homeTab = document.querySelector('.home');
const aboutTab = document.querySelector('.about');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');

const homeContainer = document.querySelector('#homeContainer');
const aboutContainer = document.querySelector('#aboutContainer');
const menuContainer = document.querySelector('#menuContainer');
const contactContainer = document.querySelector('#contactContainer');

homeTab.addEventListener('click', () => {
  homeContainer.style.display = 'block';
  // aboutPage.style.display = 'none';
  // menuPage.style.display = 'none';
  // contactPage.style.display = 'none';
});