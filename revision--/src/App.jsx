import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      profession: profession
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {

        console.log("User Added:", response.data);

        alert("User Added Successfully!");

        navigate("/users");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Add User
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-3 block"
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-3 block"
        />

        <input
          type="text"
          placeholder="Enter profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="border p-2 mb-3 block"
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>

      </form>

    </div>
  );
};

export default AddUser;