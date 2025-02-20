"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_24TellMeAboutNatural.css';

export default function _24TellMeAboutNatural() {


  const stepsJson = [
    { id: 1, content: "Hello, I'm Natural." },
    { id: 2, content: "What's your name?" },
    { id: 3, content: "Input name and continue" },
    { id: 4, content: "Hi John, I'm your personal AI that helps you get things done." },
    { id: 5, content: "Let's learn some skills" }
  ];


  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {

    let interval;
    try {
      interval = setInterval(() => {
        setStep(prevStep => (prevStep < 5 ? prevStep + 1 : 1)); // Loop steps 1 to 5
      }, 2000); 
    } catch (error) {
      setErrorMessage('An error occurred while transitioning steps.');
      console.error(error);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="app">
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {step === 1 && (
        <div className="fade-in">
          <div className="centered-content">
            <h1>{stepsJson[0].content}</h1>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="fade-in">
          <div className="centered-content">
            <h1>{stepsJson[1].content}</h1>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="fade-in">
          <div className="centered-content">
            <input type="text" placeholder="Your name..." className="input-name" />
            <button className="continue-button">Continue</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="fade-in">
          <div className="centered-content">
            <h1>{stepsJson[3].content}</h1>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="fade-in">
          <div className="centered-content">
            <h1>{stepsJson[4].content}</h1>
            <button className="start-learning-button">Start learning</button>
          </div>
        </div>
      )}
    </div>
  );
}
