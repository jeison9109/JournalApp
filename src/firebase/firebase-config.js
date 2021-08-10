import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBugDsU3vMBMSNHJ05kqX597P0p5P0DxxE",
  authDomain: "react-app-cursos-93e9b.firebaseapp.com",
  projectId: "react-app-cursos-93e9b",
  storageBucket: "react-app-cursos-93e9b.appspot.com",
  messagingSenderId: "974136397848",
  appId: "1:974136397848:web:dc4979906662327177f36d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
