const firstLoad = () => {
  const content = document.querySelector('#content');

  const header = document.createElement('h1');
  header.innerHTML = 'COALS & SLABS';

  const blurb1 = document.createElement('p');
  const blurb2 = document.createElement('p');
  blurb1.innerHTML = `Bacon ipsum dolor amet jerky chuck landjaeger, salami turducken ground round pig bresaola leberkas short ribs boudin frankfurter pastrami. Cupim bacon bresaola cow ribeye rump buffalo pig swine burgdoggen sausage landjaeger jerky pork belly capicola. Turducken t-bone flank porchetta chislic jerky, tail boudin cow alcatra meatball. Shank buffalo ham biltong alcatra salami tail short loin venison.`
  blurb2.innerHTML = `Ham hock andouille cow pancetta burgdoggen, doner rump.Salami shank short ribs pork belly prosciutto corned beef swine.Landjaeger ham beef ribs turkey shankle tongue frankfurter cupim ham hock picanha tenderloin.Andouille brisket prosciutto, tri - tip short loin strip steak turducken pork belly picanha.`;

  const bImg = document.createElement('img');
  bImg.src = "../img/coals.png"
  bImg.style.cssText = 'width: 650px; height:500px; object-fit: contain;';

  content.appendChild(header);
  content.appendChild(blurb1);
  content.appendChild(blurb2);
  content.appendChild(bImg);
}

export default firstLoad