import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSgIpOh38NmXU48K68jtJw3yQLAW1AFi0",
  authDomain: "starbucks-clone-b01b7.firebaseapp.com",
  projectId: "starbucks-clone-b01b7",
  storageBucket: "starbucks-clone-b01b7.appspot.com",
  messagingSenderId: "441493121822",
  appId: "1:441493121822:web:61cc261219abc3ad65370f",
  measurementId: "G-28GBN9S7ET",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
