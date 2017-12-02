/* global firebase */
var config = {
  apiKey: 'AIzaSyCofVBmEIKV9V2tBFwk_7YfOt4-Ydo9iIE',
  authDomain: 'hb-week4-js-dom.firebaseapp.com',
  databaseURL: 'https://hb-week4-js-dom.firebaseio.com',
  projectId: 'hb-week4-js-dom',
  storageBucket: 'hb-week4-js-dom.appspot.com',
  messagingSenderId: '108226223693'
}
firebase.initializeApp(config)

const auth = firebase.auth()

const loginbutton = document.querySelector('.dialog-login__loginbutton')
const registerbutton = document.querySelector('.dialog-login__registerbutton')

registerbutton.addEventListener('click', function () {
  const emailinput = document.querySelector('.dialog-login__input-email')
  const passinput = document.querySelector('.dialog-login__input-pass')

  const promise = auth.createUserWithEmailAndPassword(emailinput.value, passinput.value)

  promise.then(function (user) {
    console.log('User Created')  // user signed in
  }).catch(e => console.log(e.message))
})

loginbutton.addEventListener('click', function () {
  const emailinput = document.querySelector('.dialog-login__input-email')
  const passinput = document.querySelector('.dialog-login__input-pass')

  const promise = auth.signInWithEmailAndPassword(emailinput.value, passinput.value)

  promise.then(function (user) {
    console.log('User Logged')  // user signed in
  }).catch(e => console.log(e.message))
})
