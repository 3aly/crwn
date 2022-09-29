import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumnetFromAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";

import "./singup.styles.scss";
const defultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function SignUp() {
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumnetFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in User");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>don't have an acc</h2>
      <span>Sign Up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"display name"}
          type="text"
          onChange={handelChange}
          name="displayName"
          value={displayName}
        />
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

        <FormInput
          type="password"
          onChange={handelChange}
          name="confirmPassword"
          value={confirmPassword}
          label={"confirm password"}
        />
        <Button type="submit" buttonType={"inverted"}>
          SignUp
        </Button>
      </form>
    </div>
  );
}
