"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_22SimplyGetAnything.css';

export default function _22SimplyGetAnything() {


  const stepsData = [
    {
      type: 'content',
      heading: 'Natural is Incognito mode for all your Apps.',
      buttons: [
        { text: 'Enable Private Mode', class: 'action-btn' },
        { text: 'Skip', class: 'skip-btn' }
      ]
    },
    {
      type: 'content',
      heading: 'I even create an Incognito credit card for every order...',
      buttons: [
        { text: 'Enable Private Mode', class: 'action-btn' },
        { text: 'Skip', class: 'skip-btn' }
      ]
    },
    {
      type: 'system',
      message: 'Enabling Private Mode...',
      progress: true 
    },
    {
      type: 'content',
      heading: 'Once you add your payment method...',
      buttons: [
        { text: 'Continue', class: 'action-btn' }
      ]
    },
    {
      type: 'content',
      heading: 'Simply Get Anything',
      description: 'World first app to help you receive full power of AI.',
      buttons: [
        { text: 'Learn More', class: 'action-btn' }
      ]
    }
  ];


  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => prevStep + 1);
    }, 3000); 

    return () => clearInterval(timer); 
  }, []);
  
  return (
    <div className="index19-container">
      {stepsData.map((stepData, index) => (
        step >= index + 1 && (
          <div key={index} className={`fade-in step-${index + 1}`}>
            {stepData.type === 'content' ? (
              <div className="card-step">
                <h2>{stepData.heading}</h2>
                {stepData.description && <p>{stepData.description}</p>}
                <div className="buttons-container">
                  {stepData.buttons.map((button, btnIndex) => (
                    <button key={btnIndex} className={button.class}>
                      {button.text}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="card-step system-message">
                <h2>{stepData.message}</h2>
                {stepData.progress && <div className="progress-icon"></div>}
              </div>
            )}
          </div>
        )
      ))}
    </div>
  );
}
