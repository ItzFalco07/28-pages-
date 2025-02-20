"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_20MiniTime.css';

export default function _20MiniTime() {

  const metadata = {
    time: '21:37',
    batteryStatus: 'full',
    events: [
      { time: '12 pm', event: 'Lunch plan' },
      { time: '3 pm', event: 'Project meeting' }
    ],
    notifications: [
      { icon: 'your-work-plan-icon.png', title: 'My work plan', time: 'today' },
      { icon: 'summarized-icon.png', title: 'Summarized article', time: '3 min ago' }
    ],
    music: {
      albumCover: 'album-cover.jpg',
      trackTime: '3:22',
      description: 'Music'
    }
  };

  const [time, setTime] = useState(metadata.time);
  const [batteryStatus, setBatteryStatus] = useState(metadata.batteryStatus);
  const [events, setEvents] = useState(metadata.events);
  const [notifications, setNotifications] = useState(metadata.notifications);
  const [music, setMusic] = useState(metadata.music);
  const [errorMessage, setErrorMessage] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    try {
      const interval = setInterval(() => {
        setTime(prevTime => {
          
          const newTime = '21:38'; 
          return newTime;
        });
      }, 60000); 

      setTimer(interval);
    } catch (error) {
      setErrorMessage('An error occurred while updating time.');
      console.error(error);
    }

    return () => {
      if (timer) {
        clearInterval(timer); 
      }
    };
  }, [timer]);

  return (
    <div className="lock-screen">
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="status-bar">
        <span className="time">{time}</span>
        <span className="battery">
          <i className={`fas fa-battery-${batteryStatus}`}></i>
        </span>
      </div>

      <div className="notifications">
        {notifications.map((notification, index) => (
          <div className="notification" key={index}>
            <div className="notification-icon">
              <img src={notification.icon} alt={notification.title} />
            </div>
            <div className="notification-text">
              <span>{notification.title}</span>
              <small>{notification.time}</small>
            </div>
          </div>
        ))}

        <div className="music-player">
          <div className="album-cover">
            <img src={music.albumCover} alt="Music" />
          </div>
          <div className="music-info">
            <span>{music.trackTime}</span>
            <small>{music.description}</small>
          </div>
        </div>
      </div>

      <div className="calendar-section">
        <div className="calendar-date">
          <span>Wed</span>
          <span>March 9</span>
          <small>{events.length} events today</small>
        </div>

        {events.map((event, index) => (
          <div className="event" key={index}>
            <span className="time">{event.time}</span>
            <span className="event-text">{event.event}</span>
          </div>
        ))}
      </div>

      <div className="action-button">
        <span>What you want to do?</span>
      </div>
    </div>
  );
}
