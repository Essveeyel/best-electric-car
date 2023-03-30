// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

export const firebaseConfig = {
  apiKey: "AIzaSyCKiqLtQSdfFsUo3eOJIIseMqomUbAMZ18",
  authDomain: "best-electric-car.firebaseapp.com",
  projectId: "best-electric-car",
  storageBucket: "best-electric-car.appspot.com",
  messagingSenderId: "881056264335",
  appId: "1:881056264335:web:9a84e2adde986dca7040fa",
  measurementId: "G-J2CCHEDFVD"
}

const firebaseApp = initializeApp(firebaseConfig)

// const analytics = getAnalytics(app)
const auth = getAuth(firebaseApp) // share single auth across other services - storage, firestore etc
const storage = getStorage(firebaseApp) // storage is for media - images, files etc
const db = getFirestore(firebaseApp) // collections - events, users, orders
const provider = new GoogleAuthProvider()

// if (process.env.NODE_ENV === 'development') {
//   connectFirestoreEmulator(db, 'localhost', 8080)
//   console.info('Connected to localhost emulator')
// }

export { db, storage, auth, provider }
