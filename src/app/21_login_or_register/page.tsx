"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_21LoginOrRegister.css';

export default function _21LoginOrRegister() {

  const configJson = {
    steps: [
      { step: 1, type: "image", src: "/path-to-image/step1.png", alt: "Bubble 1" },
      { step: 2, type: "text", content: "Welcome to Cirus" },
      { step: 3, type: "text", content: "Surf the web, earn crypto. Simple as that." },
      { step: 4, type: "text", content: "Let's get started" },
    ],
    buttons: {
      register: "Register",
      login: "Login"
    },
    timingInterval: 1000
  };


  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    try {
      interval = setInterval(() => {
        setStep((prevStep) => (prevStep < configJson.steps.length ? prevStep + 1 : prevStep));
      }, configJson.timingInterval);
    } catch (err) {
      setError("An error occurred while transitioning steps.");
      console.error(err);
    }

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="container">
      {error && <p className="error-message">{error}</p>}
      
      {configJson.steps.map((item, index) => (
        <div key={index} className={`fade ${step === item.step ? "active" : ""}`}>
          {item.type === "image" && (
            <div className="bubble">
              <img src={item.src} alt={item.alt} />
            </div>
          )}
          {item.type === "text" && (
            <h2>{item.content}</h2>
          )}
        </div>
      ))}

      {step === 4 && (
        <div className="fade active">
          <button className="register-btn">{configJson.buttons.register}</button>
          <button className="login-btn">{configJson.buttons.login}</button>
        </div>
      )}
    </div>
  );
}
