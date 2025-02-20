"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_17HoldAndSpeak.css';

export default function _17HoldAndSpeak() {

  const configJson = {
    headerText: "See who brings gold on the Olympics",
    menuItems: [
      { title: "Book a flight to NYC", subtitle: "All options available" },
      { title: "Book a flight", subtitle: "Flight to New York, London, Tokyo", count: 2 },
      { title: "Buy something", subtitle: "Search for items to purchase", count: 1 },
      { title: "Ask anything", subtitle: "Type in your query" }
    ],
    buttonText: "Hold to Speak"
  };

  
  return (
    <div className="glass-container">
      <div className="header">
        <h1>{configJson.headerText}</h1>
      </div>

      <div className="menu-content">
        {configJson.menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
            {item.count && <span className="badge">{item.count}</span>}
          </div>
        ))}
      </div>

      <div className="footer">
        <button className="bubble-btn">{configJson.buttonText}</button>
      </div>
    </div>
  );
}
