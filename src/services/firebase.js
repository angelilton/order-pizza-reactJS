import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDs66oM0amq4p8APVaXqLxQZB28gn1dAfQ',
  authDomain: 'orderpizza-9366b.firebaseapp.com',
  databaseURL: 'https://orderpizza-9366b.firebaseio.com',
  projectId: 'orderpizza-9366b',
  storageBucket: 'orderpizza-9366b.appspot.com',
  messagingSenderId: '592854066413',
  appId: '1:592854066413:web:d22e00ed0754e63f82d8e4',
  measurementId: 'G-ST59GV8GWJ'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
