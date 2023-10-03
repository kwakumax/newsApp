import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthLogOut = () => {
  const { logout } = useAuth0();

  return (
    <button className='logOut-button' onClick={() => logout({ logoutParams: { returnTo: "http://localhost:3000" } })}>
      Log out
    </button>
  );
};

export default AuthLogOut;