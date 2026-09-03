import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";

const Navbar = () => {

  const { name } = useContext(UserContext);

  return (
    <nav className="p-5 flex gap-5">

      <Link to="/">Home</Link>

      <Link to="/users">Users</Link>

      <Link to="/about">About</Link>

      <h2>Welcome {name}</h2>

    </nav>
  );
};

export default Navbar;