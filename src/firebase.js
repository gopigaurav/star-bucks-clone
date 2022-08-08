import firebase from "firebase";

const firebaseConfig = {
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
