const home = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('h1');
  header.id = 'bannerHeader'
  header.innerHTML = 'COALS & SLABS';

  const bImg = document.createElement('img');
  bImg.classList.add('banner');
  bImg.src = "../img/coals.png"

  content.appendChild(header);
  content.appendChild(bImg);
}

export default home