import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const  AuthLogin =()=>{
  const {loginWithRedirect}= useAuth0();

  return(
    <button className="login-button" onClick={()=> loginWithRedirect()}>
      Log In
    </button>
  )
}

export default AuthLogin;