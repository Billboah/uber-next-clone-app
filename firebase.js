// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnBccgHoWsp1ETSgkEGD3hXwF6s3zngdE',
  authDomain: 'uber-next-clone-ce64a.firebaseapp.com',
  projectId: 'uber-next-clone-ce64a',
  storageBucket: 'uber-next-clone-ce64a.appspot.com',
  messagingSenderId: '963353368442',
  appId: '1:963353368442:web:4bc70b6aaaa5152c19a8c3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
