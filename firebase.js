// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3HqmIlsUGYzBCnMHsbeeh-rTu1JwAccQ',
  authDomain: 'clone-e1d3e.firebaseapp.com',
  projectId: 'clone-e1d3e',
  storageBucket: 'clone-e1d3e.appspot.com',
  messagingSenderId: '1093371412474',
  appId: '1:1093371412474:web:707528face33f53b1cae43',
  measurementId: 'G-JB4YBGR6ZZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }
