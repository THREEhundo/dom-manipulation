function menu() {
  const content = document.querySelector('#content');

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
    for (let [key, value] of Object.entries(items)) {
      const itemContainer = document.createElement('div');
      const item = document.createElement('h2');
      const itemDescription = document.createElement('p');

      itemContainer.classList.add('itemContainer');
      item.innerHTML = key;
      item.classList.add('item');
      itemDescription.innerHTML = value;
      itemDescription.classList.add('itemDescription');

      content.appendChild(itemContainer);
      itemContainer.appendChild(item);
      itemContainer.appendChild(itemDescription);
    }
  }

  menuItems(meat);
  menuItems(sides);
}

export default menu