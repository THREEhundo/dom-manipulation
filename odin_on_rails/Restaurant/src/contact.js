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

  const google = window.google;

  function addGoogleMapScript() {
    const script2 = document.createElement('script');
    const url2 = 'https://polyfill.io/v3/polyfill.min.js?features=default';
    script2.src = url2;
    document.head.appendChild(script2);

    const apiKey = 'AIzaSyAC6gFO8cSruaArgwqVrDi5wRZbWfB52DE';
    const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    const script = document.createElement('script');
    script.src = url;
    script.defer = true;
    document.head.appendChild(script);
  }
  addGoogleMapScript();

  const mapContainer = document.createElement('div');
  mapContainer.id = 'map';

  let map;
  let marker;

  function initMap() {
    var slab = {
      lat: 40.717896,
      lng: -73.989821
    }
    map = new google.maps.Map(
      document.getElementById('map'), {
        center: slab,
        zoom: 16
      });
    marker = new google.maps.Marker({
      position: slab,
      map: map
    });
  }

  window.initMap = initMap;

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