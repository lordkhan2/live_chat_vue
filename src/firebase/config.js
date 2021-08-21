import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHY0j4sLLZD2TgYvW6mupbiCxDjezh_zk",
  authDomain: "fireproject-63060.firebaseapp.com",
  projectId: "fireproject-63060",
  storageBucket: "fireproject-63060.appspot.com",
  messagingSenderId: "874337266626",
  appId: "1:874337266626:web:6401a430fbd46eaad4c45b",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
