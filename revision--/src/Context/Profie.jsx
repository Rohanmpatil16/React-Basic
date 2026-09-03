import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Profile = () => {

  const { name, setName } = useContext(UserContext);

  return (
    <div>

      <h1>Profile</h1>

      <h2>Current Name: {name}</h2>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>

    </div>
  );
};

export default Profile;