function meal_minus_one(username) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  ref.get().then(doc => {
            var old = doc.data().mealQuantity;
            var newQ = old - 1;
            ref.update({ "mealQuantity": newQ });
        });
}

function sellA(){
    meal_minus_one(window.localStorage.user);
}
