"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_15Splash.css';
import { Message } from "@mui/icons-material";

export default function _15Splash() {


  const stepsData = [
    {
      type: 'system',
      message: 'Welcome to the app! Press and hold to start.'
    },
    {
      type: 'content',
      title: 'Step 1: Let the app shape itself',
      description: 'Just say what you want and a new app forms itself around your words.'
    },
    {
      type: 'content',
      title: 'Step 2: Explore dynamic app building',
      description: 'The possibilities are endless. You control the flow of the app with your words.'
    },
    {
      type: 'system',
      message: 'Thank you for using the app!'
    }
  ];

  const systemButtons = [
    { message: 'Tap to type' },
    { message: 'Buy me something' },
    { message: 'Book a flight' },
    { message: 'Order food' },
    { message: 'Book a movie' }
  ];

  const [isHolding, setIsHolding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [start, setStart] = useState(false);

  const handleMouseDown = () => {
    setIsHolding(true);
    
    if (currentStep < stepsData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === stepsData.length - 1) {
      setStart(true)
    }
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };
  
  return (
    <div className={`main-container ${isHolding ? 'active' : ''}`}>
      <div className="content">
        {(start === false) && (<>
          {stepsData[currentStep].type === 'system' ? (
            <h2 className="system-message">{stepsData[currentStep].message}</h2>
          ) : (
            <div className="content-message">
              <h1 className="text-title">{stepsData[currentStep].title}</h1>
              <p>{stepsData[currentStep].description}</p>
            </div>
          )}
          <div className="hold-container">
            <button
              className="hold-button"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
            >
              Press and hold to START NOW
            </button>
          </div>
        </>
        )}
        {(start === true) && (
          <div>
            {systemButtons.map((button, index) => (
              <p>
                <button key={index}>{button.message}</button>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
