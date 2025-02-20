"use client"

import Image from "next/image";
import Button from '@mui/material/Button';

import React, { useState, useEffect } from 'react';
import './_2ChooseInterests.css';


export default function _2ChooseInterests() {

  const configJson = {
    interests: [
      'Cross Fit', 'Martial arts', 'Yoga', 'Sprint', 'Marathon', 'Body-building',
      'Running', 'Jog', 'Tourism', 'Swimming', 'Interval Running', 'Heavy weights', 'Cycling'
    ],
    resultText: 'I love ',
    resultSubtitle: 'Most of your friends have chosen this club',
    analysisText: 'Analysis',
    progressTime: 30, 
    friendsRun: "Friends who run too",
    friendsCount: 25,
  };


  const [selectedInterest, setSelectedInterest] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(2);
  const [showFriends, setShowFriends] = useState(false);
  const [showCount, setShowCount] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const handleInterestClick = (interest) => {
    setSelectedInterest((prev) => [...prev, interest])
    setCount(count - 1)
    if (count === 1) {
      setShowButton(true)
      setShowCount(false)
    }
  };
  
  const handleContinueClick = () => {
    setIsAnalyzing(true);
    setShowResult(false);
    setAnalysisProgress(0);
    setError(null);
    setShowButton(false)

    let progress = 0;
    try {
      const interval = setInterval(() => {
        progress += 1;
        setAnalysisProgress(progress);
        if (progress >= 18){
          setShowFriends(true)
        }
        if (progress <= 45){
          setShowFriends(false)
        }
        if (progress >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setShowResult(true);
        }
      }, configJson.progressTime);
    } catch (err) {
      setError('An error occurred during analysis.');
      console.error(err);
    }
  };

  return (
    <div className="interests-container">
      {error && <p className="error-message">{error}</p>}
      <h1 style={{color: "black"}}>Choose your interests</h1>
      {showCount && (<p style={{color: "black"}}>{count} more</p>)}
      {!isAnalyzing && !showResult && (
        <div className="bubbles">
          {configJson.interests.map((interest) => (
            <div
            key={interest}
            className="bubble"
            onClick={() => handleInterestClick(interest)}
            style={{background: selectedInterest.includes(interest) ? 'green' : "#3498db"}}
          >
            {interest}
          </div>
          ))}
        </div>
      )}
      {showButton && (
        <div><Button variant="contained" onClick={handleContinueClick} style={{background: "green"}}>Continue</Button></div>
      )}
      {isAnalyzing && (
        <div className="analysis-container">
          <div className="analysis-circle">
            <p>{configJson.analysisText}</p>
            <h2>{analysisProgress}%</h2>
          </div>
            {showFriends &&(
              <div style={{color:"black"}}>{configJson.friendsRun} <div>{configJson.friendsCount}</div></div>
            )}
        </div>
      )}

      {showResult && (
        <div className="result-screen">
          <h2>For you</h2>
          <div className="result-card">
            <p>{configJson.resultText}{selectedInterest}</p>
            <div>
              <h2>{selectedInterest} school</h2>
              <p>{configJson.resultSubtitle}</p>
              <button className="more-button">More</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
