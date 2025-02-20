"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_8Scrolling.css';

export default function _8Scrolling() {


  const serverResponses = {
    topSection: {
      time: '19:12',
      weather: {
        temp: '26°',
        feelsLike: 'Feels like 22°',
      },
    },
    scrollableCards: [
      { title: 'Office Work', description: "Summary of Kalya's thoughts" },
      { title: '5-day trip', description: 'Day 1 - Arrival and Exploring Downtown' },
      { title: 'McDonald\'s', description: 'Delivery in 12 mins\n6 items' },
      { title: 'Zoom Meeting', description: 'Building Bridges for Success\nin 20 mins (+8)' },
      { title: 'Lin', description: 'Absolutely, I\'d love to learn more about it.\n21:53' },
      { title: 'Rich Table', description: 'How long does it take Jerry to get here?\nDriving - 25 min' },
    ],
  };

  const [topSection, setTopSection] = useState(null);
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(null);

  const simulateServerResponse = () => {
    setErrorMessage(null); 

    try {
      const timer = setTimeout(() => {
        setTopSection(serverResponses.topSection);
        setCards(serverResponses.scrollableCards);
        setLoading(false);
      }, 1000); 

      setTimer(timer);
    } catch (err) {
      setErrorMessage('An error occurred while retrieving the data.');
      console.error(err);
    }
  };

  useEffect(() => {
    simulateServerResponse();

    return () => {
      if (timer) clearTimeout(timer); 
    };
  }, [timer]);



  return (
    <div className="scrollable-ui">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="top-section">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
            </div>
            <div className="weather-info">
              <span className="time">{topSection.time}</span>
              <div className="weather">
                <span className="temp">{topSection.weather.temp}</span>
                <span className="feels-like">{topSection.weather.feelsLike}</span>
              </div>
            </div>
          </div>

          <div className="scrollable-cards">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            ))}
          </div>

          <div className="footer-action">
            <button className="press-to-talk">Press to talk</button>
          </div>
        </>
      )}
    </div>
  );
}
