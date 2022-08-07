import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes

  const [secondsAmount, setSecondsAmount] = useState(
    COUNTDOWN_INITIAL_TIME_IN_SECONDS
  );

  useEffect(() => {
    if (secondsAmount > 0) {
      const interval = setInterval(() => {
        setSecondsAmount(secondsAmount - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      alert("Time's up!");
    }
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="container">
      <span>{String(minutes).padStart(2, "0")}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
}

export default App;
