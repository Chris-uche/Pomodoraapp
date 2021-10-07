import React,{ useState} from "react";
import './App.css';

function App() {
  const [timeLeft, setTimer]  = useState(25* 60)
  const minutes  = Math.floor(timeLeft/60)
  const seconds = timeLeft - minutes * 60
  
  return (
    <div className="app">
      <h2>Pomodora!</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        
      </div>
      <div className="button">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        
      </div>
      

    </div>
    
    
  );
}

export default App;
