import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []); 

  return (
    <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;