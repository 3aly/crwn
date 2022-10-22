import React, { useContext } from "react";
import { useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumnetFromAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import {
  signInWithGooglePopup,
  signinAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import "./singin.styles.scss";
const defultFormField = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defultFormField);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  const resetFormField = () => {
    setFormFields(defultFormField);
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormField();
    } catch (error) {
      console.log("error ");
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>i have an acc</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" buttonType={"inverted"}>
            Sign in
          </Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
