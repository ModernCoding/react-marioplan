import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'

export const fbConfig = {
  apiKey: "AIzaSyAf4MLFy1HjQv0rA2lW3A1q0RIHPkcttPc",
  authDomain: "mb-marioplan.firebaseapp.com",
  databaseURL: "https://mb-marioplan.firebaseio.com",
  projectId: "mb-marioplan",
  storageBucket: "mb-marioplan.appspot.com",
  messagingSenderId: "187825392813",
  appId: "1:187825392813:web:01c9a793dd439d76418a24",
  measurementId: "G-ZHX896BM9B"
}

// Initialize Firebase
firebase.initializeApp(fbConfig)
firebase.analytics()
firebase.firestore()

export default firebase