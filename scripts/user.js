/*
 * user.js
 * waimai-915103765
 *
 * handle user registration and user information in database
 */

function new_user(user_info) {
  /*
   * common info for biz and customer users
   *   name:        string (non-null)
   *   username:    string (non-null, unique)
   *   password:    string
   *   user_type:   boolean (true => biz, false => customer)
   *   phone:       string
   *   email:       string
   *   description: string
   */

  // TODO check input validity (omit in prototyping)

  // initialize
  const db = firebase.firestore()
  let new_user_info = {
    name: user_info.name,
    username: user_info.username,
    password: user_info.password,
    user_type: user_info.user_type,
    phone: user_info.phone,
    email: user_info.email,
    description: user_info.description
  }

  /*
   * info only valid for biz users
   *   location:    geopoint
   *   likes:       number
   *   dislikes:    number
   *   hearts:      number
   *   meals:       [collection] (ignored on registration)
   */

  // store biz info
  if (user_info.user_type) {
    new_user_info.location = user_info.location
    new_user_info.likes = user_info.likes
    new_user_info.dislikes = user_info.dislikes
    new_user_info.hearts = user_info.hearts

    const ref = db.collection('users').doc(new_user_info.username)
    ref.set(new_user_info).then(function () { console.log(new_user_info.username + ' in database') })
  }

  /*
   * info only valid for customer users
   *   blocks:      [collection] (ignored on registration)
   */

  // store customer info
  if (!user_info.user_type) {
    const ref = db.collection('users').doc(new_user_info.username)
    ref.set(new_user_info).then(function () { console.log(new_user_info.username + ' in database') })
  }

  // TODO properly authenticate user
  window.localStorage.clear()
  window.localStorage.user = new_user_info.username // persist cross pages but definitely not safe

  return 0; // TODO return 1 on error (new user not created)
}

function login(username, password) {
  // TODO properly authenticate user
  window.localStorage.clear()
  window.localStorage.user = username // fake authentication

  const db = firebase.firestore()
  const ref = db.collection('users').doc(username)
  ref.get().then(doc => {
    if (doc.exists) {
      if (doc.data().user_type)
        window.location.replace('./biz-overview.html')
      else
        window.location.replace('./map.html')
    }
  })
}
