import { useState, useEffect } from "react";
import "./App.css";

const maxTime = 1000 * 15; // 15 seconds 
const userActivity = [
  "click",
  "scroll",
  "keypress",
  "mousemove",
  "mousedown",
  "mousewheel",
];

const App = () => {
  let timer;
  const [timerCount, setTimerCount] = useState(maxTime);

  const updateCount = () => {
    timer = !timer && setInterval(() => {
      setTimerCount((prevCount) => prevCount - 1000);
    }, 1000);

    if (timerCount === 0) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    updateCount();

    return () => {
      clearInterval(timer);
    };
  }, [timerCount]);

  return (
    <div className="App">
      <h1>Timeout example</h1>
      
      <br />
      <br />
     
      {userActivity.forEach((input) => {
        document.addEventListener(input, () => {
        timerCount > 0 ? setTimerCount(maxTime) : setTimerCount(0);
      })})
      }
      {timerCount === 0 ? <h2>Timeout!</h2> : <h2>Time until timeout: {(timerCount / (1000))} seconds</h2>}  
      
    </div>
  );
};

export default App;
