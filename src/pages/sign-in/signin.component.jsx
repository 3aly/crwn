import React from "react";
import { useEffect } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumnetFromAuth } from "../../utils/firebase/firebase.utils.js";
import { getRedirectResult } from "firebase/auth";
const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={signInWithGoogleRedirect}>
        signin with google redirect
      </button>
      <button onClick={logGoogleuser}>signin with google popup</button>
    </div>
  );
};
export default SignIn;
