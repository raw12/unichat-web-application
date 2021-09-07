import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDMPJ_kMYbWNkGSfTfZjaD0LZhFEfRjgAg",
    authDomain: "unichat-323f1.firebaseapp.com",
    projectId: "unichat-323f1",
    storageBucket: "unichat-323f1.appspot.com",
    messagingSenderId: "334758865656",
    appId: "1:334758865656:web:3e048be5c1b7abd9fde90d",
    measurementId: "G-FWK5LX8ZBS"
  }).auth();