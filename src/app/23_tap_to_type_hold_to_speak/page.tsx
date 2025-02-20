"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_23TapToTypeHoldToSpeak.css';

export default function _23TapToTypeHoldToSpeak() {

  // Simulated server responses (JSON blob)
  const rideOptions = [
    { rideType: "UberTaxi", price: "$4.00" },
    { rideType: "UberX", price: "$8.00" },
    { rideType: "UberBlack", price: "$16.00" },
    { rideType: "UberSUV", price: "$25.00" }
  ];

  const [destination, setDestination] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    setSelectedRide(null); 
  };

  const handleRideSelection = (ride) => {
    setSelectedRide(ride);
  };

  const simulateRideOptions = () => {
    setErrorMessage(null);
    setLoading(true);
    
    try {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 1000);
      setTimer(timer);
    } catch (err) {
      setErrorMessage("An error occurred while loading ride options.");
    }
  };

  useEffect(() => {
    simulateRideOptions();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timer]);

  
  return (
    <div className="ride-request-container">
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="ride-header">
        <h1>Tap to type</h1>
      </div>

      <div className="ride-input-section">
        <input
          type="text"
          value={destination}
          onChange={handleDestinationChange}
          placeholder="Ride me to..."
        />
      </div>

      {destination && (
        <div className="ride-options">
          {rideOptions.map((ride, index) => (
            <button key={index} onClick={() => handleRideSelection(ride.rideType)}>
              {ride.rideType} - {ride.price}
            </button>
          ))}
        </div>
      )}

      {selectedRide && (
        <div className="ride-confirmation">
          <h3>Selected Ride: {selectedRide}</h3>
          <p>
            Confirm for{" "}
            {rideOptions.find((ride) => ride.rideType === selectedRide)?.price || "N/A"}
          </p>
          <button className="confirm-button">Confirm Ride</button>
        </div>
      )}
    </div>
  );
}
