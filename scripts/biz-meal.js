/*
 * biz-meal.js
 * waimai-915103765
 *
 * biz input meal information
 */

document.getElementById('submit').addEventListener('click', () => {
  const open_time = document.getElementById('open-time').value
  const open_loc = document.getElementById('open-location').value
  const mealA = {
    name: document.getElementById('meal-name-A').value,
    stock: document.getElementById('stock-A').value,
    price: document.getElementById('price-A').value,
    desription: document.getElementById('meal-description-A').value
  }
  const mealB = {
    name: document.getElementById('meal-name-B').value,
    stock: document.getElementById('stock-B').value,
    price: document.getElementById('price-B').value,
    desription: document.getElementById('meal-description-B').value
  }
  const mealC = {
    name: document.getElementById('meal-name-C').value,
    stock: document.getElementById('stock-C').value,
    price: document.getElementById('price-C').value,
    desription: document.getElementById('meal-description-C').value
  }
  console.log(open_time)
  console.log(open_loc)
  console.log(mealA)
  console.log(mealB)
  console.log(mealC)
})
