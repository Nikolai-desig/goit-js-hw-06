const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach(value => {
  const listItem = document.createElement('li');
  listItem.textContent = value;
  list.append(listItem);
});
