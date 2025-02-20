"use client"

import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import React, { useState, useEffect } from 'react';
import './_1HowCanIHelp.css';

export default function _1HowCanIHelp() {

  const configJson = {
    defaultPromptPlaceholder: 'What can I help you with today?',
    thinkingMessage: 'Thinking...',
    unknownResponse: 'I\'m not sure about that. Try asking something else.',
    cisoResponse: 'Showing stats for CISO controls...',
    moreResponse: 'Tell me more about my peer comparison',
    hintSoundRecord: 'You can record a sound',
    hintCancel: "Cancel",
    searchIcon: <SearchIcon className="icon" />,
    closeIcon: <CloseIcon className="icon" />,
    stats: {
      percentage: '24%',
      deltaLabel: 'Delta Loss',
      likelihoodButton: 'Likelihood',
      lossMagnitudeButton: 'Loss Magnitude',
      maturityLevels: [
        { label: 'Maturity 2', isCurrent: true },
        { label: 'Maturity 3', isCurrent: false }
      ]
    }
  };


  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [hint, setHint] = useState(configJson.hintSoundRecord);
  const [icon, setIcon] = useState(configJson.searchIcon);
  const [isThinking, setIsThinking] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);


  const handlePrompt = () => {
    setIsThinking(true);
    setResponse('');
    setShowStats(false);
    setShowPrompt(true);

    setTimeout(() => {
      if (prompt.includes('CISO')) {
        setResponse(configJson.cisoResponse);
        setShowStats(true);
        //setShowPrompt(false);
      }
      else if (prompt.includes('Tell me more about my peer comparison')) {
        setShowStats(true);
      } else {
        setResponse(configJson.unknownResponse);
      }
      setIsThinking(false);
      setHint(configJson.hintCancel);
      setIcon(configJson.closeIcon);
    }, 2000);
  };


  return (
    <div className="ai-container fade-in">
      <div className="header">
        <div className="user-info">
          <div className="avatar" />
        </div>
      </div>
      <div className="hint-info">
        {icon}  {hint}
      </div>
      <div className="default-question">
        {showPrompt && <>{prompt}</>}
      </div>

      <div className="response fade-in">
        {isThinking && <div className="thinking-bubble">{configJson.thinkingMessage}</div>}
        {response && !isThinking && <p>{response}</p>}
      </div>

      {showStats && (
        <div className="stats fade-in">
          <div className="controls-header">
            <button className="control-btn active">{configJson.stats.likelihoodButton}</button>
            <button className="control-btn">{configJson.stats.lossMagnitudeButton}</button>
          </div>

          <div className="stats-details">
            <div className="percentage">{configJson.stats.percentage}</div>
            <div className="delta-label">{configJson.stats.deltaLabel}</div>
            <div className="graph">
              <div className="bar-graph"></div>
            </div>
          </div>

          <div className="maturity-levels">
            {configJson.stats.maturityLevels.map((level, index) => (
              <div
                key={index}
                className={`maturity-item ${level.isCurrent ? 'current' : 'next'}`}
              >
                <span>{level.label}</span>
                {level.isCurrent && <span className="arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="prompt fade-in">
        <input
          type="text"
          placeholder={configJson.defaultPromptPlaceholder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button onClick={handlePrompt}>Submit</button>
      </div>
    </div>
  );
}
