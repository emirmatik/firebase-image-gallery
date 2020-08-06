import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDYk6xjOZfiuVIx-B77t77r54Id8ikRZ7o",
  authDomain: "image-gallery-1a013.firebaseapp.com",
  databaseURL: "https://image-gallery-1a013.firebaseio.com",
  projectId: "image-gallery-1a013",
  storageBucket: "image-gallery-1a013.appspot.com",
  messagingSenderId: "961106933351",
  appId: "1:961106933351:web:90cdbf7ad124dd7d3386c2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
