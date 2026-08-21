import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>

      <h1>Users</h1>

      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}

    </div>
  );
}

export default App;