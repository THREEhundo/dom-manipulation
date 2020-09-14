function contact() {
  const content = document.querySelector('#content');
  const contactContainer = document.createElement('div');
  contactContainer.id = 'contactContainer';
  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('heading');
  contactHeader.id = 'contactHeader';
  contactHeader.innerHTML = 'GET IN TOUCH';

  const locationContainer = document.createElement('div');
  locationContainer.id = 'locationContainer';
  const locationHeader = document.createElement('h2');
  locationHeader.innerHTML = 'LOWER EAST SIDE';
  const address = document.createElement('h3');
  address.id = 'address';
  address.innerHTML = '247 Broome St. New York, NY 10002';
  const hoursContainer = document.createElement('div');
  hoursContainer.id = 'hoursContainer';
  const hoursHeader = document.createElement('h2');
  hoursHeader.innerHTML = 'HOURS';
  hoursHeader.id = 'hoursHeader';

  const hoursArr = {
    'Mon - Fri': '11AM - 11PM',
    Sat: '11AM - MIDNIGHT',
    Sun: '11AM - 2AM'
  };

  for (let x of hoursArr) {
    const label = document.createElement('p');
    const num = document.createElement('p');
    label.innerHTML = x;
    num.innerHTML = hoursArr[x];
    hoursContainer.appendChild(label);
    hoursContainer.appendChild(num);
  }


  content.appendChild(contactContainer);
  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(locationContainer);
  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(address);
  contactContainer.appendChild(hoursContainer);

  let container = content.insertBefore(contactContainer, titleContainer);
}

export default contact