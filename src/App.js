import React,{ useState} from "react";
import './App.css';

const padTimer=(timer)=>{
  return timer.toString().padStart(2,"0")
  
}


function App() {
  const [title, setTitle] = useState("Let the count down begin !")
  const [timeLeft, setTimer]  = useState(10)
  const minutes  = padTimer(Math.floor(timeLeft/60))
  const seconds = padTimer(timeLeft - minutes * 60)

  const startTimer=()=>{
    setInterval(()=>{
      setTimer( timeLeft=> {
        if(timeLeft >=1){
          return timeLeft -1
          
        }
        return 0
      }
        
      )
      
    },1000)
  }
  
  return (
    <div className="app">
      <h2>{title}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        
      </div>
      <div className="button">
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        
      </div>
      

    </div>
    
    
  );
}

export default App;
