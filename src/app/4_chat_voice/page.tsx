"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_4ChatVoice.css';

export default function _4ChatVoice() {

  const configJson = {
    promptText: 'What financial insights can I give you today?',
    userInput: 'I want recession-proof stocks',
    steps: [
      { type: 'system', message: 'Reading Forbes' },
      { type: 'system', message: 'Analyzing stock history' },
      { type: 'system', message: 'Generating results for you...' },
    ],
    finalAnswer: 'Here are some top recession-proof stocks.',
  };


  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState(0);
  const [generatedAnswer, setGeneratedAnswer] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer;

    if (isGenerating && step < configJson.steps.length) {
      try {
        timer = setTimeout(() => {
          setStep((prevStep) => prevStep + 1);
        }, 1500); 
      } catch (err) {
        setError('An error occurred while generating steps.');
        console.error(err);
      }
      return () => clearTimeout(timer);
    }

    if (step === configJson.steps.length) {
      try {
        const answerTimer = setTimeout(() => {
          setGeneratedAnswer(configJson.finalAnswer);
        }, 1500); 
        return () => clearTimeout(answerTimer);
      } catch (err) {
        setError('An error occurred while generating the answer.');
        console.error(err);
      }
    }
  }, [isGenerating, step]);

  const handleSpeechInput = () => {
    setIsGenerating(true);
    setStep(0);
    setGeneratedAnswer('');
    setError(null); 
  };

  
  return (
    <div className="speech-container">
      {error && <p className="error-message">{error}</p>}
      <div className="prompt-area">
        <p>{configJson.promptText}</p>
        <p className="user-input">{configJson.userInput}</p>
      </div>

      <div className="steps-area">
        <ul>
          {configJson.steps.slice(0, step).map((s, index) => (
            <li key={index} className="animated-step">{s.message}</li>
          ))}
        </ul>
        {generatedAnswer && <p className="final-answer">{generatedAnswer}</p>}
      </div>

      <div className="speech-button" onClick={handleSpeechInput}>
        <div className="mic-icon"></div>
      </div>
    </div>
  );
}
