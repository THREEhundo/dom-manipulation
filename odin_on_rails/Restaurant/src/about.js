function about() {
  const content = document.querySelector('#content');
  const aboutContainer = document.createElement('div');
  const titleContainer = document.querySelector('#titleContainer');
  aboutContainer.id = 'aboutContainer';
  const heading = document.createElement('h1');
  heading.innerHTML = 'ABOUT US';
  heading.id = 'aboutHeading';
  aboutContainer.appendChild(heading);

  for (let i = 0; i < 3; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    const row = document.createElement('div');
    row.classList.add('row');
    const firstColumn = document.createElement('div');
    firstColumn.classList.add('avatar-column');
    const photo = document.createElement('div');
    photo.classList.add('photo');
    const img = document.createElement('img');
    img.classList.add('img');
    const secondColumn = document.createElement('div');
    secondColumn.classList.add('details-column')
    const cardContent = document.createElement('div');
    cardContent.classList.add('cardContent');
    const h2 = document.createElement('h2');
    h2.classList.add('aboutH2');
    const p = document.createElement('p');
    p.classList.add('aboutP');
    if (i == 0) {
      img.src = '../img/meat.jpg';
      h2.innerHTML = 'GO WHERE THE LOCALS GO';
      p.innerHTML = "New Yorkers know great BBQ. And since it opened in 2020, Coals & Slabs has been ranked as the number one spot for BBQ in NYC. The secrets to Coals & Slabs' success?";
    } else if (i == 1) {
      img.src = '../img/slab.jpg';
      h2.innerHTML = 'GOOD TIMES';
      p.innerHTML = "We take our BBQ seriously— but that’s where the seriousness stops around here. At Coals & Slabs, we encourage our guests to unwind, get messy, and most importantly, savor their time with us.";
    } else {
      img.src = '../img/slab2.jpg';
      h2.innerHTML = 'AWARD WINNING';
      p.innerHTML = "Our founders Sam Baik and Jon Jones met on the barbecue circuit in the mid-80s and after competing in Memphis' May’s World Championship Barbecue Cooking Contest and many other local and regional BBQ competitions.";
    }
    aboutContainer.appendChild(card);
    card.appendChild(row);
    row.appendChild(firstColumn);
    firstColumn.appendChild(photo);
    photo.appendChild(img);
    row.appendChild(secondColumn);
    secondColumn.appendChild(cardContent);
    cardContent.appendChild(h2);
    cardContent.appendChild(p);
  }
  let container = content.insertBefore(aboutContainer, titleContainer);
}

export default about