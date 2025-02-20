"use client"

import Image from "next/image";
import Button from '@mui/material/Button';

import React, { useState, useEffect } from 'react';
import './_19BubbleOptionsPicker.css';

export default function _19BubbleOptionsPicker() {

  const [selectedBubble, setSelectedBubble] = useState(null);
  const [showBubble, setShowBubble] = useState(true);

  const [bubblesData, setBubbleData] = useState([
    { id: 1, title: 'Order from Bestbuy delivery', details: 'Your BestBuy order will be delivered by 3 PM today.' },
    { id: 2, title: 'Naomi S. invites you to book a flight', details: 'Flight from NYC to SFO on March 25.' },
    { id: 3, title: 'Book Airbnb in New York', details: 'You have a reservation waiting for approval at New York.' },
    { id: 4, title: 'Take an Uber to work', details: 'You have a scheduled Uber trip to your workplace at 8 AM.' },
  ]);

  const [bubbleCount, setbubbleCount] = useState(bubblesData.length)

  const handleBubbleClick = (id) => {
    setSelectedBubble(id === selectedBubble ? null : id);
  };

  const handleDoneClick = (id) => {
    setBubbleData((prev) => prev.filter(bubble => bubble.id !== id))
    setbubbleCount(bubblesData.length - 1)
  }
  
  return (
    <div className="bubble-container">
      <h2>You have {bubbleCount} unfinished tasks</h2>
      <div className="bubble-wrapper">
        {bubblesData.map((bubble) => (
          <div key={bubble.id} className={`bubble ${selectedBubble === bubble.id ? 'active' : ''}`} onClick={() => handleBubbleClick(bubble.id)}>
            <span>{bubble.title}</span>
            {selectedBubble === bubble.id && (
              <div className="bubble-details">
                <p>{bubble.details}</p>
                <Button variant="contained" onClick={() => handleDoneClick(bubble.id)}>Done</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
