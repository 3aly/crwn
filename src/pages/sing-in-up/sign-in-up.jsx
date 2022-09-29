import React from "react";
import SignIN from "../sign-in/signin.component";
import SignUp from "../../compnents/sign-up/sign-up.component";
import "./authpage.style.scss";

export default function Authpage() {
  return (
    <div className="container">
      <SignIN />
      <SignUp />
    </div>
  );
}
