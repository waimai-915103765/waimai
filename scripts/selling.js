function mealA_minus_one(username) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  ref.get().then(doc => {
            var old = doc.data().mealAq;
            var newQ = old - 1;
            ref.update({ "mealAq": newQ });
        });
}

function sellA(){
    mealA_minus_one(window.localStorage.user);
}

function mealB_minus_one(username) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  ref.get().then(doc => {
            var old = doc.data().mealBq;
            var newQ = old - 1;
            ref.update({ "mealBq": newQ });
        });
}

function sellB(){
    mealB_minus_one(window.localStorage.user);
}
