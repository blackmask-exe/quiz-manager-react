import { useEffect, useState } from "react";
import { totalQuizTimeObject } from "../../questionBank";

export default function ({ setQuizInProgress }) {
  // timer functionality
  const [timeRemaining, setTimeRemaining] = useState({
    minutes: totalQuizTimeObject.minutes,
    seconds: totalQuizTimeObject.seconds,
  });

  const updateTimer = function () {
    setTimeRemaining(function (oldTimeObject) {
      if (oldTimeObject.seconds > 0) {
        return {
          ...oldTimeObject,
          seconds: oldTimeObject.seconds - 1,
        };
      } else if (oldTimeObject.minutes >= 1) {
        return {
          minutes: oldTimeObject.minutes - 1,
          seconds: 59,
        };
      } else {
        return {
          minutes: 0,
          seconds: 0,
        };
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);
    if (timeRemaining.minutes == 0 && timeRemaining.seconds == 0) {
      setQuizInProgress(false);
    }
    return () => clearInterval(interval);
  }, [timeRemaining]);
  return (
    <div className="fixed top-4 right-4 z-50 ubuntu-mono-regular mx-6 my-4">
      <span className="text-white text-lg">
        Time Remaining: {timeRemaining.minutes < 10 ? 0 : null}
        {timeRemaining.minutes}:{timeRemaining.seconds < 10 ? 0 : null}
        {timeRemaining.seconds}
      </span>
    </div>
  );
}
