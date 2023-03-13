import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyAD7PWCMwJDo37_el8xPS68iG0-qlmMTfI',
  authDomain: 'mern-projects-31d25.firebaseapp.com',
  projectId: 'mern-projects-31d25',
  storageBucket: 'mern-projects-31d25.appspot.com',
  messagingSenderId: '1032966344250',
  appId: '1:1032966344250:web:ae4ba404003c4514bf2f03',
  measurementId: 'G-FF1LJ6XT6W',
})
// Firebase storage reference
const storage = getStorage(app)
export default storage
