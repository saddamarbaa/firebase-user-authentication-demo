import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZdmMK1s59INhAwPojqF9kKbTOmh8JAqY",
  authDomain: "user-authentication-demo-5fbcb.firebaseapp.com",
  projectId: "user-authentication-demo-5fbcb",
  storageBucket: "user-authentication-demo-5fbcb.appspot.com",
  messagingSenderId: "772697483650",
  appId: "1:772697483650:web:31ca20fa6981ddf760c79b",
});

const auth = firbase.auth();

export default auth;
