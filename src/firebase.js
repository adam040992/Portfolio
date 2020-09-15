import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDCCajKb8hO01iiDIchvC2YMf-yGW4lYjs",
  authDomain: "portfolio-dbf97.firebaseapp.com",
  databaseURL: "https://portfolio-dbf97.firebaseio.com",
  projectId: "portfolio-dbf97",
  storageBucket: "portfolio-dbf97.appspot.com",
  messagingSenderId: "143695165604",
  appId: "1:143695165604:web:6ba0c49af436830e4e4e31"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
