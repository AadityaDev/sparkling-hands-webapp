import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyCW1BH472cxtMObvpoK7dp7iyOVToVrneU',
  databaseURL: 'https://sparkling-gold.firebaseio.com',
  projectId: 'sparkling-gold',
  storageBucket: 'sparkling-gold.appspot.com',
  messagingSenderId: '917942681658',
  appId: '1:917942681658:web:089898262f432af2dc7503',
  measurementId: 'G-22S558590X',
  authDomain: 'sparkling-gold.firebaseapp.com'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
