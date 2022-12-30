// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7gaSiME5asY2y3qns4AZz1WnZxKCtZWs",
  authDomain: "to-do-list-ea2af.firebaseapp.com",
  projectId: "to-do-list-ea2af",
  storageBucket: "to-do-list-ea2af.appspot.com",
  messagingSenderId: "613841627982",
  appId: "1:613841627982:web:c3dc76e87b28e56a990c1f"
};


export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return firebaseConfig;
  }
}