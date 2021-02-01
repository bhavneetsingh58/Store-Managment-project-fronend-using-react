
import React from "react";

// reactstrap components

import { ToasterProvider } from "../components/CustomComponents/ToasterContext";


function Login() {
  return (
    <div className="content">
      <ToasterProvider>
        <Login></Login>
      </ToasterProvider>
    </div>
  );
}

export default Login;
