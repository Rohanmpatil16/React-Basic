import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {

  const [users, setUsers] = useState([]);

  // GET users
  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  // DELETE user
  const deleteUser = (id) => {

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {

        // Remove deleted user from UI
        setUsers(users.filter((user) => user.id !== id));

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {users.map((user) => (

          <div
            key={user.id}
            className="p-5 bg-white text-black rounded shadow"
          >

            <h2 className="text-xl font-bold">
              {user.name}
            </h2>

            <p>{user.email}</p>

            <p>{user.phone}</p>

            <div className="mt-4 flex gap-2">

              <Link
                to={`/users/${user.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                View
              </Link>

              <button
                onClick={() => deleteUser(user.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Users;