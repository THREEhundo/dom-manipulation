const home = () => {
  const content = document.querySelector('#content');
  const pages = ['home', 'about', 'menu', 'contact'];

  const header = document.createElement('h1');
  header.id = 'bannerHeader'
  header.innerHTML = 'COALS & SLABS';

  const bImg = document.createElement('img');
  bImg.classList.add('banner');
  bImg.src = "../img/coals.png"

  content.appendChild(header);
  content.appendChild(bImg);

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
      console.log(title);
      title.setTimeout(() => title.style.opactiy = 100, 1000)
      // title.style.opacity = 100;
      // causes tab animation to fire twice
      title.classList.add('tracking-in-expand-fwd-bottom');
      if (tab.classList.contains('scale-down-ver-bottom')) {
        tab.classList.remove('scale-down-ver-bottom');
      }
      tab.classList.add('scale-up-ver-bottom');
      if (title.classList.contains('tracking-in-expand-fwd-bottom')) {
        title.classList.remove('tracking-in-expand-fwd-bottom');
      }
    });
    tab.addEventListener('mouseout', (e) => {
      title.style.opacity = 0;
      tab.classList.add('scale-down-ver-bottom');
      tab.classList.remove('scale-up-ver-bottom');
      // title.classList.add('tracking-in-expand-fwd-top');
      // title.classList.remove('tracking-in-expand-fwd-bottom');
    });
  });
  content.appendChild(tabsTitleContainer);
  content.appendChild(tabsContainer);

}

export default home