import { useState, useCallback, memo } from "react";

const TodoItem = memo(function TodoItem({ todo, onDelete, onToggle }) {
  console.log("render item", todo.id);

  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
});

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

function TodoInput({ value, onChange, onAdd }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState(() => {
    const arr = [];
    for (let i = 1; i <= 1000; i++) {
      arr.push({
        id: i,
        text: `Todo ${i}`,
        completed: false,
      });
    }
    return arr;
  });

  const [input, setInput] = useState("");

  const handleDelete = useCallback((id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  const handleAdd = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo List Performance</h1>

      <TodoInput
        value={input}
        onChange={setInput}
        onAdd={handleAdd}
      />

      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;