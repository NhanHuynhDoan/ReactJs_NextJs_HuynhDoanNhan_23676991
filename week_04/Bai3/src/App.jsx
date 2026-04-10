import { useState, useEffect } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (userId === "") return;

    const id = Number(userId);

    if (id < 1 || id > 10) {
      setUser(null);
      setError("User not found");
      return;
    }

    const fetchUser = async () => {
      try {
        setError("");

        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setUser(data);
      } catch {
        setUser(null);
        setError("User not found");
      }
    };

    fetchUser();
  }, [userId]); 

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter userId (1-10)"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      {error && <div>{error}</div>}

      {!error && user && (
        <div>
          <div>Name: {user.name}</div>
          <div>Phone: {user.phone}</div>
          <div>Website: {user.website}</div>
        </div>
      )}
    </div>
  );
}

export default App;