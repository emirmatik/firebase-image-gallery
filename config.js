import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  // PASTE_HERE_YOUR_CONFIG_OPTIONS
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
