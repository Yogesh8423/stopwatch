import React, { useState, useEffect } from 'react';
import LapList from './LapList';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    function handleStartPause() {
        setIsRunning(!isRunning);
    }

    function handleReset() {
        setTime(0);
        setLaps([]);
    }

    function handleLap() {
        setLaps([...laps, time]);
    }

    return (
        <div className="stopwatch">
            <div className="time-display">
                {Math.floor(time / 60000).toString().padStart(2, '0')}:
                {Math.floor((time / 1000) % 60).toString().padStart(2, '0')}.
                {(time % 1000).toString().padStart(3, '0')}
            </div>
            <button onClick={handleStartPause}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleLap}>
                Lap
            </button>
            <LapList laps={laps} />
        </div>
    );
}

export default Stopwatch;
