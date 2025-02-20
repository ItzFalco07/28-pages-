"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_25WaterRipples.css';

export default function _25WaterRipples() {

  const taskJson = {
    tasks: [
      { id: 1, description: 'Get me to' },
      { id: 2, description: 'Buy me something' },
      { id: 3, description: 'Book a flight' },
      { id: 4, description: 'Order food' },
    ]
  };

  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      try {
        setTimeout(() => {
          if (taskJson.tasks) {
            setTaskList(taskJson.tasks.map(task => task.description));
            setLoading(false);
          } else {
            throw new Error('Tasks not found');
          }
        }, 2000); 
      } catch (err) {
        setLoading(false);
        setError('Failed to load tasks.');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const createRipple = (event) => {
    const target = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - target.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - target.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = target.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }
    target.appendChild(circle);
  };



  return (
    <div className="dark-ui" onClick={createRipple}>
      <div className="tap-section">
        <div className="prompt-text">What would you like to do</div>
        <div className="interaction">Tap to type</div>
        <div className="microphone-button">
          <button className="mic-btn">
            <span className="mic-icon"></span>
          </button>
        </div>
      </div>

      <div className="task-list">
        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          taskList.map((task, index) => (
            <div key={index} className="task-item" onClick={createRipple}>
              {task}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
