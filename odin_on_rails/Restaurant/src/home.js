const home = () => {
  const content = document.querySelector('#content');
  const homeContainer = document.createElement('div');
  homeContainer.id = 'homeContainer';
  const pages = ['home', 'about', 'menu', 'contact'];

  const header = document.createElement('h1');
  header.id = 'bannerHeader'
  header.innerHTML = 'COALS & SLABS';

  const bImg = document.createElement('img');
  bImg.classList.add('banner');
  bImg.src = "../img/coals.png"

  homeContainer.appendChild(header);
  homeContainer.appendChild(bImg);

  // tabs for pages
  const tabsContainer = document.createElement('div');
  tabsContainer.id = 'tabsContainer';

  const tabsTitleContainer = document.createElement('div');
  tabsTitleContainer.id = 'titleContainer';


  pages.forEach((page, index) => {
    const title = document.createElement('div');
    title.innerHTML = page;
    title.classList.add('tabTitle', 'tab');
    title.id = `title${index}`;
    tabsTitleContainer.appendChild(title);

    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.classList.add(page);
    tabsContainer.appendChild(tab);
    tab.addEventListener('mouseover', (e) => {
      if (tab.classList.contains('scale-down-ver-bottom')) {
        tab.classList.remove('scale-down-ver-bottom');
      }
      tab.classList.add('scale-up-ver-bottom');
      if (title.classList.contains('fade-out')) {
        title.classList.remove('fade-out');
      }
      title.classList.add('fade-in');
    });
    tab.addEventListener('mouseout', (e) => {
      tab.classList.add('scale-down-ver-bottom');
      tab.classList.remove('scale-up-ver-bottom');
      if (title.classList.contains('fade-in')) {
        title.classList.remove('fade-in');
      }
      title.classList.add('fade-out');
    });
  });
  content.appendChild(homeContainer);
  content.appendChild(tabsTitleContainer);
  content.appendChild(tabsContainer);
}

export default home