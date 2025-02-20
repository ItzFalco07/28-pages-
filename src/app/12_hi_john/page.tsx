"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_12HiJohn.css';

export default function _12HiJohn() {


  const configJson = {
    sidebarIcons: ['home', 'folder', 'doc', 'settings'],
    greetings: {
      main: 'Hi there,',
      highlightedName: 'John',
      subText: 'What would you like to know?',
      instructions: 'Use one of the most common prompts below or use your own to begin',
    },
    prompts: [
      'Write a to-do list for a personal project or task',
      'Generate an email to reply to a job offer',
      'Summarise this article or text for me in one paragraph',
      'How does AI work in a technical capacity',
    ],
    inputPlaceholder: 'Ask whatever you want...',
    options: ['Add Attachment', 'Use Image'],
    charLimit: 1000,
  };

  const [error, setError] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    setCharCount(e.target.value.length);
  };

  
  return (
    <div className="main-container">
      {error && <p className="error-message">{error}</p>}

      <div className="sidebar">
        {configJson.sidebarIcons.map((icon, index) => (
          <div key={index} className={`sidebar-icon ${icon}`}></div>
        ))}
      </div>

      <div className="content">
        <h1>
          {configJson.greetings.main} <span className="name-highlight">{configJson.greetings.highlightedName}</span>
        </h1>
        <h2>{configJson.greetings.subText}</h2>
        <p className="instructions">{configJson.greetings.instructions}</p>

        <div className="prompt-container">
          {configJson.prompts.map((prompt, index) => (
            <div key={index} className="prompt">{prompt}</div>
          ))}
        </div>

        <button className="refresh-btn">Refresh Prompts</button>

        <div className="input-section">
          <input
            type="text"
            className="input-box"
            placeholder={configJson.inputPlaceholder}
            maxLength={configJson.charLimit}
            onChange={handleInputChange}
          />
          <div className="options">
            {configJson.options.map((option, index) => (
              <span key={index}>{option}</span>
            ))}
            <span className="char-count">{charCount}/{configJson.charLimit}</span>
            <button className="submit-btn">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
