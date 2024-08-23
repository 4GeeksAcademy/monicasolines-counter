import React, { useState, useEffect } from "react";
import "../../styles/index.css"; 

export const Counter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    const digits = Array(6).fill(0);
   
    const secondsString = String(seconds);
    for (let i = 0; i < secondsString.length; i++) {
        digits[digits.length - 1 - i] = secondsString[secondsString.length - 1 - i];
    }

    return (
        <div className="m-3 counter-container d-flex justify-content-center align-items-center rounded bg-dark">
            <div className="counter-digit icon rounded d-flex justify-content-center align-items-center">
            <i className="fas fa-clock text-light"></i>
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="counter-digit rounded text-light d-flex justify-content-center align-items-center">
                    {digit}
                </div>
            ))}
        </div>
    );
};

