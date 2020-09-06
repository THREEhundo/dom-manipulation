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

  // tabs for pages
  const pages = ['home', 'about', 'menu', 'contact'];
  const tabsContainer = document.createElement('div');
  tabsContainer.id = 'tabsContainer';
  pages.forEach((page) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.id = page;
    tabsContainer.appendChild(tab);
  });

  content.appendChild(tabsContainer);

}

export default home