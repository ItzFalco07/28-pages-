"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_5GoodmorningJacobJones.css';

export default function _5GoodmorningJacobJones() {


  const configJson = {
    user: {
      name: 'Jenifer',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    calendar: {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Google_Calendar_icon_%282020%29.svg',
      events: [
        { time: '10:00', description: '•' },
        {
          time: '11:00',
          description: 'Meeting with Nicholas',
          avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
        },
      ],
    },
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Add additional logic if necessary
    } catch (err) {
      setError('An error occurred while loading the dashboard.');
      console.error(err);
    }
  }, []);
  

  return (
    <div className="dashboard">
      {error && <p className="error-message">{error}</p>}
      
      <div className="greeting-section">
        <img 
          src={configJson.user.avatar} 
          alt="User avatar" 
          className="avatar"
        />
        <div className="greeting-text">
          <h1>Good morning</h1>
          <h2>{configJson.user.name}</h2>
        </div>
      </div>

      <div className="calendar-section">
        <div className="calendar-header">
          <img 
            src={configJson.calendar.icon} 
            alt="Google Calendar Icon"
            className="calendar-icon"
          />
          <h3>Calendar</h3>
        </div>

        <div className="calendar-events">
          {configJson.calendar.events.map((event, index) => (
            <div key={index} className="event">
              <span className="time">{event.time}</span>
              <span className="event-description">
                {event.avatar ? (
                  <img 
                    src={event.avatar} 
                    alt={`${event.description} avatar`} 
                    className="avatar-small"
                  />
                ) : null}
                {event.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
