import firebase from './firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;