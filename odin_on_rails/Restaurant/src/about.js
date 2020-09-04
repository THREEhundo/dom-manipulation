function about() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  const firstDiv = document.createElement('div');
  const firstH2 = document.createElement('h2');
  const firstP = document.createElement('p');
  const secondDiv = document.createElement('div');
  const secondH2 = document.createElement('h2');
  const secondP = document.createElement('p');
  const thirdDiv = document.createElement('div');
  const thirdH2 = document.createElement('h2');
  const thirdP = document.createElement('p');


  firstH2.innerHTML = 'GO WHERE THE LOCALS GO';
  firstP.innerHTML = "New Yorkers know great BBQ. And since it opened in 2020, Coals & Slabs has been ranked as the number one spot for BBQ in NYC. The secrets to Coals & Slabs' success?";

  secondH2.innerHTML = 'GOOD TIMES';
  secondP.innerHTML = "We take our BBQ seriously— but that’s where the seriousness stops around here. At Coals & Slabs, we encourage our guests to unwind, get messy, and most importantly, savor their time with us.";

  thirdH2.innerHTML = 'AWARD WINNING';
  thirdP.innerHTML = "Our founders Sam Baik and Jon Jones met on the barbecue circuit in the mid-80s and after competing in Memphis' May’s World Championship Barbecue Cooking Contest and many other local and regional BBQ competitions, they made the leap from friends to business partners. The pit at the first Central BBQ on Central Avenue was fired up in 2002 and has been stoked ever since thanks to our wonderful customers.";

  content.appendChild(container);
  container.appendChild(firstDiv);
  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(firstP);
  container.appendChild(secondDiv);
  secondDiv.appendChild(secondH2);
  secondDiv.appendChild(secondP);


}

export default about