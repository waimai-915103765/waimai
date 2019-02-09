function meal_minus_one(username) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  ref.update({ "mealQuantity": mealQuantity -= 1 })
}

function sellA(){
    meal_minus_one(window.localStorage.user);
}