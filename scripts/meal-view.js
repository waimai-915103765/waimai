
function update_meals() {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  var newAname = document.getElementById('meal-name-A').value;
  if (newAname != ""){
        ref.update({ "mealAq": document.getElementById('stock-A').value });
        ref.update({ "mealAName": newAname });
        ref.update({ "priceA": document.getElementById('price-A').value });
        ref.update({ "descriptionA": document.getElementById('meal-description-A').value });
    }
    else{
        ref.update({ "mealAq": 0 });
        ref.update({ "mealAName": "" });
        ref.update({ "priceA": 0 });
        ref.update({ "descriptionA": "" });
    }
    var newBname =document.getElementById('meal-name-B').value

    if (newBname != ""){
    ref.update({ "mealBq": document.getElementById('stock-B').value });
    ref.update({ "mealBName": newBname });
    ref.update({ "priceB": document.getElementById('price-B').value });
    ref.update({ "descriptionB": document.getElementById('meal-description-B').value });
    }
    else{
    ref.update({ "mealBq": 0 });
    ref.update({ "mealBName": "" });
    ref.update({ "priceB": 0 });
    ref.update({ "descriptionB": "" });
    }
}

function mealA_Name(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().mealAName)
}

function mealB_Name(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().mealBName)
}

function mealA_Price(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().priceA)
}

function mealB_Price(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().priceB)
}

function mealA_Quantity(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().mealAq)
}

function mealB_Quantity(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().mealBq)
}

function mealA_Descrip(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().descriptionA)
}

function mealB_Descrip(username){
    const db = firebase.firestore()
    const ref = db.collection('users').doc(username)
    return ref.get().then(doc => doc.data().descriptionB)
}