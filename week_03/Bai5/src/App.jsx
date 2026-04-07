import { useState, useRef } from "react";

function App() {
  const [time, setTime] = useState(0);

  const [laps, setLaps] = useState([]);

  const [lapName, setLapName] = useState("");

  const intervalRef = useRef(null);

  const inputRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    if (lapName.trim() === "") return;

    setLaps((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: lapName,
        time: time,
      },
    ]);

    setLapName("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Stopwatch</h1>

      {/* Hiển thị milliseconds */}
      <h2>{time} ms</h2>

      {/* Buttons */}
      <button onClick={handleStart}>
        Start
      </button>

      <button onClick={handlePause}>
        Pause
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

      <hr />

      {/* Input Lap name */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Lap name"
        value={lapName}
        onChange={(e) => setLapName(e.target.value)}
      />

      <button onClick={handleAddLap}>
        Add Lap
      </button>

      {/* Danh sách lap */}
      <ul>
        {laps.map((lap) => (
          <li key={lap.id}>
            {lap.name} - {lap.time} ms
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;