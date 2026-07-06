import { useState, useEffect, useCallback } from "react";

interface CountdownReturn {
  timeLeft: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

export default function useCountdown(initialValue: number): CountdownReturn {
  const [timeLeft, setTimeLeft] = useState(initialValue);

  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(initialValue);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          clearInterval(timerId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning]);

  return { timeLeft, start, pause, reset };
}
