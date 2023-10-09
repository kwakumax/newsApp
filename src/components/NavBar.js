import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthLogin from "./AuthLogin";
import AuthLogOut from "./AuthLogOut";
import AuthProfile from "./AuthProfile";




export const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="navBar">
      <h1 className="newsapp-title">TheNews App</h1>
      {isAuthenticated? <AuthProfile /> : <AuthLogin />}
      {isAuthenticated && <AuthLogOut />}
      
    </div>
  )
}
