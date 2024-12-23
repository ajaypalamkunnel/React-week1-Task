import React from "react";
import "./profile.css";
function Profile({ id, name, email }) {
  return (
    <div className="profile-card">
      <h3>{`ID: ${id}`}</h3>
      <p>{`Name: ${name}`}</p>
      <p>{`Email: ${email}`}</p>
    </div>
  );
}

export default Profile;
