"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_3OrderToHome.css';

export default function _3OrderToHome() {

  const serverResponses = {
    stageOneResponse: {
      message: 'Please select a location for delivery.',
      locations: [
        { name: 'home', address: '20 Glenbrook Dr, Hillsborough, CA, 92591' },
        { name: 'work', address: '400 S-El Camino Real San Mateo, CA 92591' }
      ]
    },
    stageTwoResponse: {
      message: 'Please select a store for shopping.',
      stores: [
        { name: 'Whole Foods', category: 'Groceries' },
        { name: 'Sprouts Farmers Market', category: 'Groceries' },
        { name: 'Smart & Final', category: 'Groceries' }
      ]
    },
    orderSummaryResponse: (location, store) => ({
      summary: `Order Summary`,
      deliveryLocation: `Delivering to: ${location}`,
      selectedStore: `Store: ${store}`
    })
  };


  const [orderStage, setOrderStage] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleOrderInput = (input) => {
    try {
      if (input.toLowerCase() === 'order food') {
        setOrderStage(1);
        simulateServerResponse('stageOneResponse');
      } else {
        throw new Error('Invalid input. Please type "Order food".');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setOrderStage(2);
    simulateServerResponse('stageTwoResponse');
  };

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    setOrderStage(3);
    simulateServerResponse('orderSummaryResponse', selectedLocation, store);
  };

  const simulateServerResponse = (responseKey, location = '', store = '') => {
    setResponse(null);
    setErrorMessage(null);

    try {
      const timer = setTimeout(() => {
        if (responseKey === 'orderSummaryResponse') {
          setResponse(serverResponses[responseKey](location, store));
        } else {
          setResponse(serverResponses[responseKey]);
        }
      }, 1000); 

      setTimer(timer);
    } catch (err) {
      setErrorMessage('An error occurred while retrieving the data.');
      console.error(err);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  return (
    <div className="order-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {orderStage === 0 && (
        <div className="order-input">
          <input
            type="text"
            placeholder="Type 'Order food'"
            onChange={(e) => handleOrderInput(e.target.value)}
          />
        </div>
      )}

      {orderStage === 1 && response && (
        <div className="location-bubbles">
          <p>{response.message}</p>
          {response.locations.map((location) => (
            <div className="bubble" key={location.name} onClick={() => handleLocationSelect(location.name)}>
              to {location.name} <div>{location.address}</div>
            </div>
          ))}
        </div>
      )}

      {orderStage === 2 && response && (
        <div className="store-bubbles">
          <p>{response.message}</p>
          {response.stores.map((store) => (
            <div className="bubble" key={store.name} onClick={() => handleStoreSelect(store.name)}>
              {store.name} <div>{store.category}</div>
            </div>
          ))}
        </div>
      )}

      {orderStage === 3 && response && (
        <div className="order-summary">
          <h3>{response.summary}</h3>
          <p>{response.deliveryLocation}</p>
          <p>{response.selectedStore}</p>
        </div>
      )}
    </div>
  );
}
