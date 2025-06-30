// ✅ Firebase config already correct
import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Added for image upload

const firebaseConfig = {
  apiKey: "AIzaSyDik8dO4SsD29TQ3LVCcJGweqJbaRIIRVU",
  authDomain: "recipe-web-67327.firebaseapp.com",
  projectId: "recipe-web-67327",
  storageBucket: "recipe-web-67327.appspot.com",
  messagingSenderId: "795860644110",
  appId: "1:795860644110:web:178be81a692099f46d275f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const provider = new FacebookAuthProvider();

export {
  auth,
  db,
  provider,
  storage,
  signInWithPopup,
  signOut,
  onAuthStateChanged
};
