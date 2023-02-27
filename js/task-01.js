const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", categoriesItems.length);

categoriesItems.forEach((item) => {
  const categoryName = item.firstElementChild.textContent;
  const categoryElements = item.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

// for (const item of categoriesItems) {
//   const categoriesName = item.querySelector("h2").textContent;
//   const categoriesElements = item.querySelectorAll("li").length;
//   console.log('Category:', categoriesName);
//   console.log('Elements:', categoriesElements);
