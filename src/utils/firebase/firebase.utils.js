import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD8BKwd5covq4niB-1rn3LF_r65RqhalGU",
  authDomain: "crwn-d54ac.firebaseapp.com",
  projectId: "crwn-d54ac",
  storageBucket: "crwn-d54ac.appspot.com",
  messagingSenderId: "125719505240",
  appId: "1:125719505240:web:61757b2f94c3387093dd2d",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumnetFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapShopt = await getDoc(userDocRef);
  console.log(userSnapShopt);
  console.log(userSnapShopt.exists());

  if (!userSnapShopt.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error");
    }
  }

  return userDocRef;
};
