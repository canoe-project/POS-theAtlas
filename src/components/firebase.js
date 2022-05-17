import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBHhN65Yb1AX7V4ROxMol2PXZjDWgpI0aY",
  authDomain: "evernote-clone-2d281.firebaseapp.com",
  databaseURL: "https://evernote-clone-2d281.firebaseio.com",
  projectId: "evernote-clone-2d281",
  storageBucket: "evernote-clone-2d281.appspot.com",
  messagingSenderId: "146412884801",
  appId: "1:146412884801:web:1f7a939667d08a60c887c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
