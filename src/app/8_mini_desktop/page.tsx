"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_8MiniDesktop.css';

export default function _8MiniDesktop() {


  const eventData = {
    Personal: [
      { time: '12:00 PM', title: 'Your flight to San Francisco', details: 'Departure at 12 PM', type: 'flight' },
      { time: '3 min ago', title: 'Summarized article', details: 'Tech innovation and AI updates', type: 'article' },
    ],
    Family: [
      { time: 'Tomorrow', title: 'Jerry and Jessy 10th Anniversary', details: 'Celebrating with family dinner', type: 'event' },
    ],
    Business: [
      { time: '12:20 PM', title: 'AI Phone UX', details: 'Cross-team visibility and progress updates', type: 'meeting' },
      { time: '3:00 PM', title: 'Project Meeting', details: 'Design and product update discussion', type: 'meeting' },
    ],
  };


  const [selectedCategory, setSelectedCategory] = useState('Personal');
  const [events, setEvents] = useState([]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      
      const categoryEvents = eventData[selectedCategory];
      setEvents(categoryEvents);
    } catch (error) {
      console.error('Error loading events:', error);
    }

    return () => {
      
      clearTimeout();
    };
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setStep(0); 
  };

  useEffect(() => {
    let timer;
    if (events.length > 0) {
      timer = setInterval(() => {
        setStep((prevStep) => prevStep + 1);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [events]);


  
  return (
    <div className="app25">
      <div className="category-nav">
        {Object.keys(eventData).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="event-list">
        {events.map((event, index) =>
          index <= step ? (
            <div key={index} className={`event-item fade-in`}>
              <p className="event-time">{event.time}</p>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-details">{event.details}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
