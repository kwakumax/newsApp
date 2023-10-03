import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <div className="profile-pic-container">
          <img  className="profile-pic" src={user.picture} alt={user.name} />
        </div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
      </div>
    )
  );
};

export default AuthProfile;