"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_7HeyWelcomeJane.css';

export default function _7HeyWelcomeJane() {


  const configJson = {
    statusIcons: {
      wifi: 'https://img.icons8.com/ios-glyphs/30/ffffff/wifi.png',
      battery: 'https://img.icons8.com/ios-filled/30/ffffff/battery.png',
    },
    weather: {
      temp: '25°',
      condition: 'Sunny',
      clockIcon: 'https://img.icons8.com/ios/50/ffffff/clock--v1.png',
    },
    welcomeMessage: {
      greeting: 'Hey Jane,',
      welcome: 'Welcome back!',
    },
    actions: {
      micIcon: 'https://img.icons8.com/color/48/000000/microphone.png',
      cameraIcon: 'https://img.icons8.com/ios/50/ffffff/camera.png',
      speakText: 'Hold to speak',
    },
  };


  const [error, setError] = useState(null);

  useEffect(() => {
    try {
     
      console.log('Component loaded successfully');
    } catch (err) {
      setError('An error occurred while loading the component.');
      console.error(err);
    }
  }, []);

  return (
    <div className="phone-ui">
      {error && <p className="error-message">{error}</p>}
      
      <div className="status-bar">
        <img src={configJson.statusIcons.wifi} alt="Wifi" />
        <img src={configJson.statusIcons.battery} alt="Battery" />
      </div>

      <div className="weather-section">
        <div className="weather-info">
          <span className="temp">{configJson.weather.temp}</span>
          <span className="condition">{configJson.weather.condition}</span>
        </div>
        <div className="clock-icon">
          <img src={configJson.weather.clockIcon} alt="Clock" />
        </div>
      </div>

      <div className="welcome-section">
        <h1>{configJson.welcomeMessage.greeting}</h1>
        <p>{configJson.welcomeMessage.welcome}</p>
      </div>

      <div className="actions-section">
        <div className="hold-speak">
          <img src={configJson.actions.micIcon} alt="Microphone" />
          <span>{configJson.actions.speakText}</span>
        </div>
        <div className="camera-icon">
          <img src={configJson.actions.cameraIcon} alt="Camera" />
        </div>
      </div>
    </div>
  );
}
