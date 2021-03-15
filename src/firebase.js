import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDHV4O5j-fox3T6sVzamTz1fpsDCFWKi0g",
    authDomain: "bt3103-week-6-8e14c.firebaseapp.com",
    projectId: "bt3103-week-6-8e14c",
    storageBucket: "bt3103-week-6-8e14c.appspot.com",
    messagingSenderId: "33584758475",
    appId: "1:33584758475:web:b45d3c2369b8781a5be54e",
    measurementId: "G-JEQNG82VNN"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;