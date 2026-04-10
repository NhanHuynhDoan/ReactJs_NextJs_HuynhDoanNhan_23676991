import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {loading && (
        <div>Loading...</div>
      )}

      {error && (
        <div>Error: {error}</div>
      )}

      {!loading && !error && (
        <div>
          {data.map((user) => (
            <div key={user.id}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;