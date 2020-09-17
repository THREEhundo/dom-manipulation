function menu() {
  const content = document.querySelector('#content');
  const titleContainer = document.querySelector('#title-container');
  const menuContainer = document.createElement('div');
  const header = document.createElement('h1');
  menuContainer.id = 'menu-container';
  header.id = 'menu-header';
  header.innerHTML = 'MENU';
  menuContainer.appendChild(header);
  content.appendChild(menuContainer);

  const meat = {
    'BLACK ANGUS BEEF BRISKET': 'Sliced beef brisket, is slow smoked in house and coated with our house made dry rub blend.',
    'BERKSHIRE PORK BELLY': 'Sliced pork belly, is smoked in house and coated with our house made dry rub blend.',
    'BERKSHIRE SPICY SAUSAGE': 'Our spicy pork sausage link, has a blend of ancho chili, garlic and other spices.',
    'DUROC PORK RIBS': 'Our ribs are smoked in house and coated with our house made dry rub blend.'
  }

  const sides = {
    'BURNT END BAKED BEANS': 'The burnt ends of our smoked meats (contains pork and beef) are added to the beans for smoky flavor and then slowly cooked over night.',
    "SAM'S BROCCOLI SALAD": 'This is a Baik family recipe with chilled broccoli tossed in lemon vinaigrette, with fresh garlic and a dash of chili peppers.',
    'HALF-SOUR PICKLES': 'Ba-tampte half-sour pickles are made in New York and have a sour and garlicky kick.',
    'CAMPFIRE POTATOES': 'Baked potatoes filled with cheddar cheese, garlic butter, sour cream, and chives.'
  }

  function menuItems(items) {
    const meatContainer = document.createElement('div');
    meatContainer.id = 'meat-container';
    meatContainer.classList.add('menu-item-container');
    const sidesContainer = document.createElement('div');
    sidesContainer.id = 'sides-container';
    sidesContainer.classList.add('menu-item-container');
    for (let [key, value] of Object.entries(items)) {
      const menuItemContainer = document.createElement('div');
      const item = document.createElement('h2');
      const itemDescription = document.createElement('p');

      menuItemContainer.classList.add('menu-item-container');
      item.innerHTML = key;
      item.classList.add('item');
      itemDescription.innerHTML = value;
      itemDescription.classList.add('item-description');

      if (items == meat) {
        const meatItem = document.createElement('div');
        meatItem.id = 'meat-item';
        menuContainer.appendChild(meatContainer);
        meatContainer.appendChild(meatItem);
        meatItem.appendChild(item);
        meatItem.appendChild(itemDescription);
      } else if (items == sides) {
        const sideItem = document.createElement('div');
        sideItem.id = 'side-item';
        menuContainer.appendChild(sidesContainer);
        sidesContainer.appendChild(sideItem);
        sideItem.appendChild(item);
        sideItem.appendChild(itemDescription);
      }
    }
  }

  menuItems(meat);
  menuItems(sides);

  let container = content.insertBefore(menuContainer, titleContainer);
}

export default menu