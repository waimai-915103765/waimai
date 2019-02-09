/*
 * db.js
 * waimai-915103765
 *
 * handle query to database
 */

function get_loc(username) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  return ref.get().then(doc => doc.data().location)
}

function set_loc(username, location) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  ref.update({ "location": location })
}

function user_info(username) {
  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  return ref.get().then(doc => doc.data())
}

function all_biz(username) {
  const db = firebase.firestore()
  return db.collection('users').where('user_type', '==', true).get().then(snapshot => {
    let biz = []
    snapshot.docs.forEach(doc => biz.push(doc.data()))
    return biz
  })
}

