import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "FILL_HERE",
  authDomain: "FILL_HERE",
  databaseURL: "FILL_HERE",
  projectId: "FILL_HERE",
  storageBucket: "FILL_HERE",
  messagingSenderId: "FILL_HERE",
  appId: "FILL_HERE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
