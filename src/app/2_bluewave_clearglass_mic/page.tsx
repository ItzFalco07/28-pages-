"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_2BluewaveClearGlassMic.css';

export default function _2BluewaveClearGlassMic() {


  const configJson = {
    welcomeMessage: 'Start speaking',
    searchPlaceholder: 'Say something...',
    micActiveMessage: 'Listening...',
    hintVoice: 'Hold to speak',
    hintText: 'Tap to type',
  };

  const resultsVideos = [
    {
      type: 'content',
      video: {
        title: 'Getting Started with ReactJS',
        description: 'A complete beginner guide to ReactJS.',
        thumbnail: 'https://via.placeholder.com/150',
        tags: ['react', 'javascript', 'frontend'],
      },
    },
    {
      type: 'content',
      video: {
        title: 'Advanced CSS Techniques',
        description: 'Mastering CSS with advanced techniques.',
        thumbnail: 'https://via.placeholder.com/150',
        tags: ['css', 'web development'],
      },
    },
  ];

  const [isMicActive, setIsMicActive] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    if (isMicActive) {
      const newTimer = setInterval(() => {
        setStep((prevStep) => (prevStep + 1) % resultsVideos.length);
      }, 3000); 
      setTimer(newTimer);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isMicActive, timer]);

  const handleMicPress = () => {
    setIsMicActive(true);
    setError(''); 
  };

  const handleMicRelease = () => {
    try {

      const recognizedSpeech = 'React'; 
      const relatedVideos = resultsVideos.filter(video =>
        video.video.tags.includes(recognizedSpeech.toLowerCase())
      );

      if (relatedVideos.length === 0) throw new Error('No results found for your speech');

      setIsMicActive(false);
      setError('');
    } catch (err) {
      setError(err.message);
      setIsMicActive(false);
    }
  };
  const handleTap = () => {
    setShowForm(true)
  };
  

  return (
    <div className="index24-container">
      <div style={{color:"black"}}>{prompt}</div>
      {!isMicActive && <div style={{color:"black"}}><button style={{background: "#ccc"}} onClick={handleTap}>{configJson.hintText}</button></div>}
      <div className={`mic-container ${isMicActive ? 'active' : ''}`}>
        <div className="mic-icon" onMouseDown={handleMicPress} onMouseUp={handleMicRelease}>
          <span>{isMicActive ? configJson.micActiveMessage : configJson.welcomeMessage}</span>
        </div>
      </div>

      {!isMicActive && <div style={{color:"black"}}>{configJson.hintVoice}</div>}
      {error && <p className="error-message">{error}</p>}

      {showForm && <div>
        <input
        type="text"
        placeholder=''
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        ></input> 
      </div>}

      <div className={`results-section ${isMicActive ? 'fade-in' : ''}`}>
        {resultsVideos.map((item, index) =>
          index <= step ? (
            <div key={index} className="result-item">
              <div className="video-card">
                <img src={item.video.thumbnail} alt={item.video.title} />
                <h3>{item.video.title}</h3>
                <p>{item.video.description}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
