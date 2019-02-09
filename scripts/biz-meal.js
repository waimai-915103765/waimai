/*
 * biz-meal.js
 * waimai-915103765
 *
 * biz input meal information
 */

document.getElementById('submit').addEventListener('click', e => {
  e.preventDefault()
  const open_time = document.getElementById('open-time').value
  const open_loc = document.getElementById('open-location').value
  const mealA = {
    name: document.getElementById('meal-name-A').value,
    stock: document.getElementById('stock-A').value,
    price: document.getElementById('price-A').value,
    description: document.getElementById('meal-description-A').value
  }
  const mealB = {
    name: document.getElementById('meal-name-B').value,
    stock: document.getElementById('stock-B').value,
    price: document.getElementById('price-B').value,
    description: document.getElementById('meal-description-B').value
  }
  console.log(open_time)
  console.log(open_loc)
  console.log(mealA)
  console.log(mealB)
  window.location.replace('./selling.html')
})
