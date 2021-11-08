import React, { useEffect, useState } from "react";
import "./styles/Time.css";

export default function Time() {
  const [state, setState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="box">
      <div className="time">{state}</div>
    </div>
  );
}
