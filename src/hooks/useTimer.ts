import { useEffect, useState } from 'react';

export function useTimer() {
  const [minutes, setMinutes] = useState<number>(3);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timerId);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [seconds, minutes]);

  return {
    minutes,
    seconds,
  };
}
