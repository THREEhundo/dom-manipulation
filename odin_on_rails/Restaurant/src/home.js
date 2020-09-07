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
    tab.addEventListener('mouseover', (e) => {
      if (tab.classList.contains('scale-down-ver-bottom')) {
        tab.classList.remove('scale-down-ver-bottom');
      }
      tab.classList.add('scale-up-ver-bottom')
    });
    tab.addEventListener('mouseout', (e) => {
      tab.classList.add('scale-down-ver-bottom');
      tab.classList.remove('scale-up-ver-bottom');
    });
  });

  content.appendChild(tabsContainer);

}

export default home