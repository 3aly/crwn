import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumnetFromAuth } from "../../utils/firebase/firebase.utils.js";
const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumnetFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleuser}>signin with google</button>
    </div>
  );
};
export default SignIn;
