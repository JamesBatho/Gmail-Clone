import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCieelefL9z-8gpd0J0IuRdbgB9jJTq5XY",
  authDomain: "clone-5f900.firebaseapp.com",
  projectId: "clone-5f900",
  storageBucket: "clone-5f900.appspot.com",
  messagingSenderId: "987995094994",
  appId: "1:987995094994:web:b3fce4a511ded716d9920b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
