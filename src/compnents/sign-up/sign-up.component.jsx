import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defultFormField = {
  displayname: "",
  email: "",
  password: "",
  confirmpassword: "",
};
export default function SignUp() {
  const [formFields, setFormFields] = useState(defultFormField);
  const { displayname, email, password, confirmpassword } = formFields;
  console.log(formFields);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handelSubmit = async (e) => {
    e.preventDefult();

    if (e.password != e.confirmpassword) {
      alert("passwords doesn't match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        e.target.email,
        e.target.password
      );
      console.log(response, "createAuthUserWithEmail");
    } catch (err) {
      console.log("error in createAuthUserWithEmail");
    }
  };
  return (
    <div>
      <h1>Sign Up with email and password</h1>
      <form onSubmit={handelSubmit}>
        <label>Display name</label>
        <input
          required
          type="text"
          onChange={handelChange}
          name="displayname"
          value={displayname}
        />
        <label>Email</label>
        <input
          required
          type="email"
          onChange={handelChange}
          name="email"
          value={email}
        />
        <label>password</label>
        <input
          required
          type="password"
          onChange={handelChange}
          name="password"
          value={password}
        />
        <label>confirm password</label>
        <input
          required
          type="password"
          onChange={handelChange}
          name="confirmpassword"
          value={confirmpassword}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}
