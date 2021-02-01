import React, { useState } from "react";

// reactstrap components
import firebase from "firebase/app";
import { ToasterContext } from "./ToasterContext";


function AddLogin() {
  const db = firebase.firestore();

  const initialValues = {
    firstname: "",
    lastname: "",
    gender: "",
    seatno: "",
    rollno: "",
    standard: "",
  };

  const [Login, setLogin] = useState({ ...initialValues });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onSubmit = async (addToast, e) => {
    e.preventDefault();
    console.log(Login);
    setLoading(true);
    try {
      const docRef = await db.collection("Logins").add({
        ...Login,
        seatno: parseInt(Login.seatno),
        rollno: parseInt(Login.rollno),
      });
      console.log(docRef.id);
      toggle();
      addToast({ text: "Successfully created a new Login", type: "success" });
    } catch (e) {
      setError("An error occured while trying to save the Login");
      setLoading(false);
    }
  };

  return (
    <ToasterContext.Consumer>
      {({ addToast }) => (
        <>
          <LoginForm
            {...{ loading, Login, setLogin, error, toggle, modal }}
            onSubmit={onSubmit.bind(this, addToast)}
            buttonLabel="Add Login"
          />
        </>
      )}
    </ToasterContext.Consumer>
  );
}

export default AddLogin;
