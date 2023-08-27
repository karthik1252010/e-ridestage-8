import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBMsU1hTD1I0_UgKgwje1hH5N1HvXyawL8",
  authDomain: "e-ride-3f32c.firebaseapp.com",
  projectId: "e-ride-3f32c",
  storageBucket: "e-ride-3f32c.appspot.com",
  messagingSenderId: "879353435919",
  appId: "1:879353435919:web:4406969a7104a3c9e6107a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
