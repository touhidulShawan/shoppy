import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBR2Hnew2lubzHruA3SqySOWAe2DFrCNrM",
  authDomain: "shoppy-db.firebaseapp.com",
  databaseURL: "https://shoppy-db.firebaseio.com",
  projectId: "shoppy-db",
  storageBucket: "shoppy-db.appspot.com",
  messagingSenderId: "735600094273",
  appId: "1:735600094273:web:dd26b768d0741b5149eac0",
  measurementId: "G-08VV92QLV4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
