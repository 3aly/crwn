import React from "react";
import SignIn from "../../compnents/sign-in/sign-in.component";
import SignUp from "../../compnents/sign-up/sign-up.component";
import "./authpage.style.scss";
import {
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

export default function Authpage() {
  return (
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  );
}
