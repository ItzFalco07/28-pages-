"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_13HeyAlly.css';

export default function _13HeyAlly() {


  const configJson = {
    user: {
      name: 'Katherine Paddington',
      profilePic: 'https://via.placeholder.com/50',
      badge: 'PREMIUM',
    },
    message: "Hey, Ally! I just want to share that I feel better now",
    condition: [
      { label: 'Heart Rate', value: '80 beats/min' },
      { label: 'Sleep', value: '8 hours' },
    ],
    suggestions: [
      {
        title: 'Yoga for Everyday',
        description: 'Each session offers a blend of gentle movements, mindfulness, and breathing.',
      },
      {
        title: 'Breathing Techniques',
        description: 'Learn simple techniques to relax and reduce stress.',
      },
    ],
    chats: [
      {
        name: 'Dr. Martina Pauls',
        message: 'Well done, I’m proud of you! Keep up the breathing exercises!',
        time: '4:24PM',
      },
      {
        name: 'Yoga in the park',
        message: 'Sam: Let’s meet tomorrow at 10:30AM on Park Avenue!',
        time: '2:56PM',
      },
      {
        name: 'Mind Matters',
        message: 'Paul: I wanted to share a useful podcast for everyone who struggles with...',
        time: '1:00PM',
      },
    ],
  };

  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);

  const handleListeningClick = () => {
    try {
      setIsListening(!isListening);
    } catch (err) {
      setError('An error occurred while trying to toggle listening mode.');
      console.error(err);
    }
  };

  
  return (
    <div className="app-container">
      {error && <p className="error-message">{error}</p>}

      <div className="user-profile">
        <div className="user-info">
          <img
            src={configJson.user.profilePic}
            alt="User Profile"
            className="profile-pic"
          />
          <div>
            <h2>{configJson.user.name}</h2>
            <p className="premium-badge">{configJson.user.badge}</p>
          </div>
        </div>
        <div className="notification-icon">
          <i className="bell-icon"></i>
        </div>
      </div>

      <div className="listening-section">
        <h3>{configJson.message}</h3>
        <button className="listen-button" onClick={handleListeningClick}>
          {isListening ? 'Stop Listening' : 'Listening to you'}
        </button>
      </div>

      {isListening && (
        <div className="additional-content">
          <div className="condition-section">
            <h3>Your condition today</h3>
            <div className="condition-details">
              {configJson.condition.map((item, index) => (
                <div key={index} className="condition-item">
                  <p>{item.label}</p>
                  <h4>{item.value}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="suggestions">
            <h3>Our suggestions for you</h3>
            {configJson.suggestions.map((item, index) => (
              <div key={index} className="item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="chats">
            <h3>Chats</h3>
            {configJson.chats.map((chat, index) => (
              <div key={index} className="chat-item">
                <h4>{chat.name}</h4>
                <p>{chat.message}</p>
                <span className="chat-time">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
