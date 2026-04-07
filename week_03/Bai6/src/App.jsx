import { useReducer } from "react";

const initialState = {
  status: "idle",
  users: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        status: "success",
        users: action.payload,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!res.ok) {
        throw new Error("Fetch failed");
      }

      const data = await res.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message,
      });
    }
  };

  return (
    <div>
      <h1>Fetch Users</h1>

      {/* Retry / Fetch button */}
      <button onClick={fetchUsers}>
        Retry
      </button>

      {/* UI theo trạng thái */}

      {state.status === "idle" && (
        <p>Click Retry to load users</p>
      )}

      {state.status === "loading" && (
        <p>Loading...</p>
      )}

      {state.status === "error" && (
        <p>Error: {state.error}</p>
      )}

      {state.status === "success" && (
        <ul>
          {state.users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;