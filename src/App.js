import React,{ useState,useRef} from "react";
import './App.css';

const padTimer=(timer)=>{
  return timer.toString().padStart(2,"0")
  
}
//Current is where we keep or store datas we want to use
//useRef is used to keep data between renders

function App() {
  const [title, setTitle] = useState("Let the count down begin !")
  const [timeLeft, setTimer]  = useState(10)
  const minutes  = padTimer(Math.floor(timeLeft/60))
  const seconds = padTimer(timeLeft - minutes * 60)

  const intervalRef = useRef(null)

  const startTimer=()=>{
    setTitle("You are doing well")
    if(intervalRef.current ===! null) return
    intervalRef.current = setInterval(()=>{
      setTimer( timeLeft=> {
        if(timeLeft >=1) return timeLeft -1;
        resetTimer();
        return 0;
      })
      
    },1000)
    //console.log(intervalRef.current)
  }

  const stopTimer=()=>{
    if(intervalRef.current === null) return
    //console.log(intervalRef.current)
    clearInterval(intervalRef.current)
    setTitle("Keep it up")
  }
  const resetTimer=()=>{
    clearInterval(intervalRef.current)
    setTitle("Ready to go another round")
    setTimer(25*60)
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
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
        
      </div>
      

    </div>
    
    
  );
}

export default App;
