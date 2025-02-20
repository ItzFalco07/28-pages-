"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_16ShowMWVideos.css';

export default function _16ShowMWVideos() {

  const configJson = {
    welcomeMessage: 'How can I help you today?',
    searchPlaceholder: 'Show me videos about...',
  };


  const searchResults = [
    {
      type: 'system',
      message: 'Here are some popular videos based on your search query.',
    },
    {
      type: 'content',
      video: {
        title: 'Understanding ReactJS',
        description: 'A complete guide to ReactJS and how it works.',
        thumbnail: 'https://via.placeholder.com/150',
        tags: ['react', 'javascript', 'frontend'],
      },
    },
    {
      type: 'content',
      video: {
        title: 'Getting Started with JavaScript',
        description: 'An introduction to JavaScript for beginners.',
        thumbnail: 'https://via.placeholder.com/150',
        tags: ['javascript', 'beginner', 'web development'],
      },
    },
    {
      type: 'content',
      video: {
        title: 'CSS Tricks for Beginners',
        description: 'Learn the best CSS tricks and tips for web development.',
        thumbnail: 'https://via.placeholder.com/150',
        tags: ['css', 'design', 'frontend'],
      },
    },
    {
      type: 'system',
      message: 'End of the video recommendations.',
    },
  ];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState(null); 

  useEffect(() => {
    let timer;
    if (displayResults) {
      timer = setInterval(() => {
        setStep((prevStep) => prevStep + 1);
      }, 3000); 
    }

    return () => clearInterval(timer); 
  }, [displayResults]);

  const handleSearch = () => {
    try {
      if (!query) {
        throw new Error("Please enter a search term."); 
      }
      
      const filteredResults = searchResults.filter(item => {
        if (item.type === 'content') {
          return item.video.tags.some(tag => query.toLowerCase().includes(tag.toLowerCase()));
        }
        return true; 
      });

      if (filteredResults.length === 0) {
        throw new Error("No results found for your query.");
      }

      setResults(filteredResults);
      setDisplayResults(true);
      setStep(0);
      setError(null); 
    } catch (err) {
      setError(err.message); 
    }
  };


  return (
    <div className="app">
      <div className="search-section">
        <h1>{configJson.welcomeMessage}</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder={configJson.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="bubble-button" onClick={handleSearch}>
            <span>Search</span>
          </div>
        </div>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className={`results-section ${displayResults ? 'fade-in' : ''}`}>
        {results.map((item, index) =>
          index <= step ? (
            <div key={index} className="result-item">
              {item.type === 'system' ? (
                <p className="system-message">{item.message}</p>
              ) : (
                <div className="video-card">
                  <img src={item.video.thumbnail} alt={item.video.title} />
                  <h3>{item.video.title}</h3>
                  <p>{item.video.description}</p>
                </div>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
