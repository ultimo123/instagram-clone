import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Here i  want to import the seed  file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBg_aedljdwfYOHwkaAx1z4DfA4ckec3jU",
  authDomain: "instagram-clone-clone.firebaseapp.com",
  projectId: "instagram-clone-clone",
  storageBucket: "instagram-clone-clone.appspot.com",
  messagingSenderId: "63907788318",
  appId: "1:63907788318:web:0ce105be8fc73e23e6600f",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

//Here is where I  want to call the seed  file
// seedDatabase(firebase);

export { firebase, FieldValue };
