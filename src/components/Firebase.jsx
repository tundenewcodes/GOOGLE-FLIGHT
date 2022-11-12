import firebase from "firebase/compat/app";

import  'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJb9vqSdjU-OqylJ9ah_rfMNR4d1abZ0U",
  authDomain: "banded-nuance-367515.firebaseapp.com",
  projectId: "banded-nuance-367515",
  storageBucket: "banded-nuance-367515.appspot.com",
  messagingSenderId: "540333930378",
  appId: "1:540333930378:web:dcf62a004c52249a55fa73",
    measurementId: "process.env.MEASUREMENT_ID",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };