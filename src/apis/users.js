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
