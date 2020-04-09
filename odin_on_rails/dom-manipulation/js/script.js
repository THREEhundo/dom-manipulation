const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';

const blueHeader = document.createElement('h3');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = 'blue';

const box1 = document.createElement('div');
box1.setAttribute('style',
  'border: solid; background: pink');
const box1h1 = document.createElement('div');
box1h1.textContent = "I'm in a div";
const box1p = document.createElement('p');
box1p.textContent = "ME TOO!";

box1.appendChild(box1p);
box1.appendChild(box1h1);

container.appendChild(box1);
/*
  problem: had an issue with container being null
  fix: put script before the end of the closing body tag.
*/