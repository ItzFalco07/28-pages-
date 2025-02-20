"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_26BuyMeHomePod.css';

export default function _26BuyMeHomePod() {

  const configJson = [
    {
      step: 1,
      type: 'content',
      message: 'Tap to type',
      options: ['Buy me something', 'Book a flight', 'Order food']
    },
    {
      step: 2,
      type: 'system',
      message: 'Listening...',
      micActive: true,
    },
    {
      step: 3,
      type: 'content',
      message: 'Buy me a HomePod from Apple',
      products: [
        { name: 'Apple HomePod. White', price: '$370' },
        { name: 'Apple HomePod. Black', price: '$350' }
      ]
    },
    {
      step: 4,
      type: 'system',
      message: 'Buy me a HomePod from Apple and deliver to my house',
    },
    {
      step: 5,
      type: 'content',
      message: 'Tracking your shipment',
      trackingInfo: {
        orderNumber: '537666723',
        deliveryStatus: 'Arriving',
        location: 'Shipment 1,2'
      }
    },
    {
      step: 6,
      type: 'system',
      message: 'Hello, John! Your order was successfully delivered.',
    }
  ];

  const [step, setStep] = useState(0);
  const [activeContent, setActiveContent] = useState({});

  useEffect(() => {
    if (step < configJson.length) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 3000);

      setActiveContent(configJson[step]);

      return () => clearTimeout(timer);
    }
  }, [step]);
  

  return (
    <div className="index23-container">
      {activeContent && (
        <div className={`fade-in step-${activeContent.step}`}>
          {activeContent.type === 'content' && (
            <div className="card-step">
              <h2>{activeContent.message}</h2>
              {activeContent.options && (
                <ul className="options-list">
                  {activeContent.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              )}
              {activeContent.products && (
                <div className="product-options">
                  {activeContent.products.map((product, index) => (
                    <div key={index} className="product-card">
                      <p>{product.name}</p>
                      <span>{product.price}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeContent.trackingInfo && (
                <div className="tracking-info">
                  <p>Order Number: {activeContent.trackingInfo.orderNumber}</p>
                  <p>Status: {activeContent.trackingInfo.deliveryStatus}</p>
                  <p>Location: {activeContent.trackingInfo.location}</p>
                </div>
              )}
            </div>
          )}

          {activeContent.type === 'system' && (
            <div className="system-message">
              <p>{activeContent.message}</p>
              {activeContent.micActive && <div className="mic-icon">🎤</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
