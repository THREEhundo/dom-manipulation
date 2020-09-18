function contact() {
  const content = document.querySelector('#content');
  const titleContainer = document.querySelector('#title-container');
  const contactContainer = document.createElement('div');
  contactContainer.id = 'contact-container';
  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('heading');
  contactHeader.id = 'contact-header';
  contactHeader.innerHTML = 'GET IN TOUCH';

  const locationContainer = document.createElement('div');
  locationContainer.id = 'location-container';
  const locationHeader = document.createElement('h2');
  locationHeader.innerHTML = 'LOWER EAST SIDE';
  const address = document.createElement('h3');
  address.id = 'address';
  address.innerHTML = '247 Broome St. New York, NY 10002';
  const hoursContainer = document.createElement('div');
  hoursContainer.id = 'hours-container';
  const hoursHeader = document.createElement('h2');
  hoursHeader.innerHTML = 'HOURS';
  hoursHeader.id = 'hours-header';

  const hoursArr = {
    'MON - FRI': '11AM - 11PM',
    'SAT': '11AM - MIDNIGHT',
    'SUN': '11AM - 2AM'
  };

  for (let hours in hoursArr) {
    const label = document.createElement('h2');
    label.classList.add('days');
    label.innerHTML = hours;

    const num = document.createElement('h2');
    num.classList.add('hours');
    num.innerHTML = hoursArr[hours];

    const span = document.createElement('span');
    if (hours == 'MON - FRI') {
      span.innerHTML = '...........................';
      label.appendChild(span);
    } else if (hours == 'SAT') {
      span.innerHTML = '.............................';
      label.appendChild(span);
    } else if (hours == 'SUN') {
      span.innerHTML = '...........................................';
      label.appendChild(span);
    }
    console.log(hours);
    hoursContainer.appendChild(label);
    hoursContainer.appendChild(num);
  };

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  const socials = ['facebook', 'instagram', 'ubereats'];
  const appsContainer = document.createElement('div');
  appsContainer.id = 'apps-container';

  socials.forEach((app, i) => {
    const socialContainer = document.createElement('div');
    socialContainer.classList.add('social-container');
    const socialLink = document.createElement('a');
    socialLink.classList.add('social-link');
    socialLink.href = `https://${app}.com`
    const socialImg = document.createElement('img');
    socialImg.classList.add('social-img');
    socialImg.id = app;

    if (i == 0) {
      socialImg.src = '../img/facebook.png';
    } else if (i == 1) {
      socialImg.src = '../img/instagram.png';
    } else {
      socialImg.src = '../img/ubereats.png';
    }

    socialLink.appendChild(socialImg);
    socialContainer.appendChild(socialLink);
    appsContainer.appendChild(socialContainer);
  });

  contactContainer.appendChild(contactHeader);
  contactContainer.appendChild(locationContainer);
  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(address);
  contactContainer.appendChild(hoursContainer);
  contactContainer.appendChild(mapContainer);
  content.appendChild(contactContainer);
  contactContainer.appendChild(appsContainer);

  let container = content.insertBefore(contactContainer, titleContainer);
}

export default contact