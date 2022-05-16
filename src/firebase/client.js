import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAvZI55xuCUf3HQrypYC3NbhXABYKZx0yo',
  authDomain: 'apphostal.firebaseapp.com',
  projectId: 'apphostal',
  storageBucket: 'apphostal.appspot.com',
  messagingSenderId: '937282586346',
  appId: '1:937282586346:web:143b5c3c675bf176ac7993',
  measurementId: 'G-16K7FFR7ZM',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export const getRooms = () => {
  return db
    .collection('habitaciones')
    .get()
    .then((snapshot) => {
      const rooms = []
      snapshot.docs.map((doc) => {
        rooms.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      return rooms
    })
}
