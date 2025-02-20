"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_10ThatsYourActionToday.css';

export default function _10ThatsYourActionToday() {

  const infoJson = {
    "San Francisco to New York": {
      title: "Flight Info",
      details: "Flight from San Francisco to New York at 9:25PM, arriving at 4:30AM. Terminal A, Gate A15."
    },
    "Company Notes": {
      title: "Company Notes",
      details: "Notes about OKR and company-related strategies."
    },
    "Daily Actions": {
      title: "Daily Actions",
      details: "Review of today's scheduled tasks and meetings."
    }
  };

  const [loading, setLoading] = useState(false);
  const [activeInfo, setActiveInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = (infoKey) => {
    setLoading(true);
    setActiveInfo(null);
    setError(null);

    try {
      setTimeout(() => {
        setLoading(false);
        if (infoJson[infoKey]) {
          setActiveInfo(infoJson[infoKey]);
        } else {
          throw new Error('Info not available');
        }
      }, 3000); 
    } catch (err) {
      setLoading(false);
      setError('Failed to load the requested information.');
    }
  };


  return (
    <div className="scrollable-ui">
      <div className="header">
        <div className="time-weather">
          <span className="time">12:37</span>
          <span className="weather">26° Feels like 22°</span>
        </div>
      </div>

      <div className="scrollable-content">
        <div className="trip-card" onClick={() => handleClick("San Francisco to New York")}>
          <h2>San Francisco to New York</h2>
          <p>9:25PM - 4:30AM | Terminal A | Gate A15</p>
          <button>Book a ride (25 min)</button>
        </div>

        <div className="company-related" onClick={() => handleClick("Company Notes")}>
          <h3>Personal Notes</h3>
          <p>Notes about OKR</p>
        </div>

        <div className="daily-actions" onClick={() => handleClick("Daily Actions")}>
          <h3>Daily Actions</h3>
          <p>Hey, that's your actions for today</p>
        </div>

        
        {loading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : activeInfo ? (
          <div className="active-info">
            <h2>{activeInfo.title}</h2>
            <p>{activeInfo.details}</p>
          </div>
        ) : null}
      </div>

      <div className="footer">
        <input type="text" placeholder="How can I help?" />
      </div>
    </div>
  );
}
