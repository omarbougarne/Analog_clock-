import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './style/Clock.css'

export default function Clock() {

    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() =>{
            const timeNow = new Date();
            setTime({
                hours: timeNow.getHours(),
                minutes: timeNow.getMinutes(),
                seconds: timeNow.getSeconds(),
            })
        }, 1000);
        return () => clearInterval(interval)
        
    }, [])

    const hourAngle = (time.hours % 12) * 30 + (time.minutes / 60) * 30;
    const minuteAngle = time.minutes * 6;
    const secondAngle = time.seconds * 6;

    
  return (
    <div className="clock">
        12
      <div
        className="hand hour"
        style={{ transform: `rotate(${hourAngle}deg)` }}
        
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `rotate(${secondAngle}deg)` }}
      ></div>
    </div>
  );
}
