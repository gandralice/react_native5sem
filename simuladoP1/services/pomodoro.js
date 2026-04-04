import { useRef, useState } from "react";

export default function pomodoro() {
  const [time, setTime] = useState(1200);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev - 1); // 'prev' garante o vl correto
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setTime(1200);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return { time, start, reset, formatTime };
}
