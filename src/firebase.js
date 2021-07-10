// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCaG2-9X4JiVj-eactfYQgekkOrQIE5J2Q",
    authDomain: "linkedin-clone-aa549.firebaseapp.com",
    projectId: "linkedin-clone-aa549",
    storageBucket: "linkedin-clone-aa549.appspot.com",
    messagingSenderId: "232439109413",
    appId: "1:232439109413:web:5c53ea17a71459a8f2accc",
    measurementId: "G-7L5KTXZ0E6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};