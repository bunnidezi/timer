import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
<>
<div className="header"><h3>Coder Timer</h3></div>
    <div className="App container">
      <div className="timer__wrapper">
        <div className="timer__display">
        {/* {change time} */}
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          {/* {change button stop} */}
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          {/* { change button start} */}
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;