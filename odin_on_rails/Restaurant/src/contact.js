function contact() {
  const content = document.querySelector('#content');
  const contactContainer = document.createElement('div');
  contactContainer.id = 'contactContainer';
  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('heading');
  contactHeader.id = 'contactHeader';
  contactHeader.innerHTML = 'GET IN TOUCH';

  content.appendChild(contactContainer);
  contactContainer.appendChild(contactHeader);
  let container = content.insertBefore(contactContainer, titleContainer);
}

export default contact