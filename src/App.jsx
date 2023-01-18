import React from "react";
import "./App.css";

const App = () => {
  const [timer, setTimer] = React.useState(9000);

  return (
    <div className="App">
      <h1>Timeout example</h1>
      <br />
      <h2>Time until timeout: {timer/1000} seconds</h2>
    </div>
  );
};

export default App;
