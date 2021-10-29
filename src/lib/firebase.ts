import { initializeApp } from 'firebase/app'
import { initializeFirestore, setLogLevel } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

setLogLevel('debug')

export const app = initializeApp({
  apiKey: 'AIzaSyBAGx9aQUD4s-bOogwc_WBT_Gz2fegc3Ow',
  appId: '1:360404976683:web:b2d2557af9e11e75b2566e',
  authDomain: 'jphacks-c2125.firebaseapp.com',
  measurementId: 'G-6ZWYZT64GF',
  messagingSenderId: '360404976683',
  projectId: 'jphacks-c2125',
  storageBucket: 'jphacks-c2125.appspot.com',
})

export const firestore = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})

export const storage = getStorage(app)
