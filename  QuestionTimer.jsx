import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('SETTING TIMEOUT');
  const Timer=  setTimeout(onTimeout, timeout);

  return()=>{
    clearTimeout();
  }
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('SETTING INTERVAL');
  const interval=  setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

//clean up
     return()=>{
      clearInterval(interval)
     }
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}