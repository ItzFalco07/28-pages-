"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_6Goodday_Jacob_Jones.css';

export default function _6Goodday_Jacob_Jones() {

  const configJson = {
    user: {
      name: 'Robert Richards',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    tabs: ['Overview', 'Information', 'Reports'],
    recentActivity: [
      { description: 'Gold to Silver', amount: '€5,466.82' },
      { description: 'Mastercard to Silver', amount: '€8,000.00' },
      { description: 'Balance Top Up', amount: '€5,466.82' },
    ],
    recentActivityDate: 'Monday, 5th of December',
    assetsDistribution: [
      { asset: 'Gold Coins', value: '€370,100.00' },
      { asset: 'Gold Bars', value: '€230,900.00' },
    ],
    portfolioRebalancing: {
      stats: ['1.20%', '+7,100.12', '72/100'],
      description: 'This offer assumes an increase in the return of your portfolio by 8% over a one-year plan.',
    },
    clientStats: {
      clients: ['Waddie Burma', 'Missy Cosmac', 'Sonic Abdurankman', 'Geradly Ilin'],
      increaseMessage: 'You have 6 new clients and $190,000 increase in the portfolio this month.',
    },
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Add any additional effect logic here if needed
    } catch (err) {
      setError('An error occurred while loading the data.');
      console.error(err);
    }
  }, []);

  
  return (
    <div className="dashboard-container">
      {error && <p className="error-message">{error}</p>}
      
      <div className="user-section">
        <img
          src={configJson.user.avatar}
          alt="User Avatar"
          className="user-avatar"
        />
        <h1>{configJson.user.name}</h1>
        <div className="tabs">
          {configJson.tabs.map((tab, index) => (
            <button key={index} className={`tab-button ${index === 0 ? 'active' : ''}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {configJson.recentActivity.map((activity, index) => (
            <li key={index}>
              {activity.description} - {activity.amount}
            </li>
          ))}
        </ul>
        <div className="activity-date">{configJson.recentActivityDate}</div>
      </div>

      <div className="assets-distribution">
        <h2>Assets Distribution</h2>
        {configJson.assetsDistribution.map((item, index) => (
          <div key={index} className="distribution-item">
            <span>{item.asset}</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      <div className="stats-portfolio">
        <h2>Portfolio Rebalancing</h2>
        {configJson.portfolioRebalancing.stats.map((stat, index) => (
          <div key={index} className="stat-item">
            {stat}
          </div>
        ))}
        <div className="portfolio-rebalancing">
          <p>{configJson.portfolioRebalancing.description}</p>
          <button className="save-button">Save Changes</button>
        </div>
      </div>

      <div className="client-stats">
        <h2>Client Stats</h2>
        <ul>
          {configJson.clientStats.clients.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
        <div className="portfolio-increase">
          {configJson.clientStats.increaseMessage}
        </div>
      </div>
    </div>
  );
}
