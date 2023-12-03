import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from 'firebase/auth';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5lpqXOjU0GD48qxduQh318xhsPnUnRkY',
  authDomain: 'jhub-auth-d5236.firebaseapp.com',
  projectId: 'jhub-auth-d5236',
  storageBucket: 'jhub-auth-d5236.appspot.com',
  messagingSenderId: '562732532978',
  appId: '1:562732532978:web:2c519b48a5068f1998bc6b',
  measurementId: 'G-884E4HJGHB'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
