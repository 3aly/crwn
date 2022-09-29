import React from "react";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signinAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumnetFromAuth } from "../../utils/firebase/firebase.utils.js";
import { Button } from "../../compnents/button/button.component";
import { FormInput } from "../../compnents/form-input/form-input.component";
import "./singup.styles.scss";

const defultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const resetFormField = () => {
    setFormFields(defultFormField);
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  useEffect(() => {
    (async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumnetFromAuth(response.user);
      }
    })();
  }, []);
  const logGoogleuser = async () => {
    // const { user } = await signInWithGooglePopup();
    // console.log(userDocRef);

    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumnetFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>i have an acc</h2>
      <span>Sign in</span>
      <FormInput
        type="email"
        onChange={handelChange}
        name="email"
        value={email}
        label={"email"}
      />
      <FormInput
        type="password"
        onChange={handelChange}
        name="password"
        value={password}
        label={"password"}
      />
      <div className="buttons-container">
        <Button
          buttonType={"inverted"}
          onClick={signinAuthUserWithEmailAndPassword}
        >
          Sign in
        </Button>
        <Button onClick={logGoogleuser} buttonType={"google"} type="button">
          google sign in
        </Button>
      </div>
    </div>
  );
};
export default SignIn;
