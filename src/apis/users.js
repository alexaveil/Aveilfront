import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'

export const signUpWithEmailPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signInWithEmailPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const createUserFirestore = (data) => {
  return firebase.firestore().collection('users').add(data)
}

export const sendPasswordReset = (email) => {
  return firebase.auth().sendPasswordResetEmail(email)
}

export const authStateListener = () => {
  let user = null

  firebase.auth().onAuthStateChanged((userAuth) => {
    if (userAuth) {
      user = userAuth
    }
  })

  return user
}
