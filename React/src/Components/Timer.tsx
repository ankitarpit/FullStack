import { useState, useEffect } from "react";

const Timer = () => {
  const [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Today is {currDate.toLocaleDateString()} </h2>
      <h2>Time is {currDate.toLocaleTimeString()} </h2>
    </div>
  );
}

export default Timer;