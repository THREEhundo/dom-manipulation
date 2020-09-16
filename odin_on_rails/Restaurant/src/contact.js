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
    'MON - FRI': '11AM - 11PM',
    'SAT': '11AM - MIDNIGHT',
    'SUN': '11AM - 2AM'
  };

  for (let hours in hoursArr) {
    const label = document.createElement('h3');
    const num = document.createElement('h3');
    label.innerHTML = hours;
    num.innerHTML = hoursArr[hours];
    hoursContainer.appendChild(label);
    hoursContainer.appendChild(num);
  };

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(locationContainer);
  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(address);
  contactContainer.appendChild(hoursContainer);
  contactContainer.appendChild(mapContainer);
  content.appendChild(contactContainer);

  let container = content.insertBefore(contactContainer, titleContainer);
}

export default contact