import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  // const isStart =false;
  const active = useRef();
  const [refInterval, setRefInterval] = useState();
  const startTimer = () => {
    active.current.disabled = true;
    setRefInterval( setInterval(() => {
      setTime((time) => time + 1)},1000) 
  );}
  const stopTimer = () => {
    active.current.disabled = false;
    clearInterval(refInterval);
  };
  const resetTimer = () => {
    active.current.disabled = false;
    clearInterval(refInterval)
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;