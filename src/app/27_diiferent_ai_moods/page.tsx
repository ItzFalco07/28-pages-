"use client"

import Image from "next/image";

import React, { useState, useEffect, useRef } from 'react';
import './_27DifferentAIMoods.css';

export default function _27DifferentAIMoods() {

  const videoData = {
    happy: { src: "./deepsearch.mp4" },
    sad: { src: "./idol.mp4" },
    angry: { src: "./seeding.mp4" },
  };


  const [currentMood, setCurrentMood] = useState('happy');
  const [nextMood, setNextMood] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoSrc, setVideoSrc] = useState(videoData.happy.src);
  const [error, setError] = useState(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef(null);

  const handleEnterClick = () => {
    setUserInteracted(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        setError("Failed to play video due to user interaction restrictions.");
        console.error(err);
      });
    }
  };

  const handleMoodChange = (mood) => {
    try {
      if (isTransitioning || nextMood === mood) return;
      setNextMood(mood);
      preloadVideo(mood);
    } catch (err) {
      setError('Failed to switch video. Please try again later.');
      console.error(err);
    }
  };

  const preloadVideo = (mood) => {
    const newVideo = document.createElement("video");
    newVideo.src = videoData[mood].src;
    newVideo.onloadeddata = () => {
      transitionToNextVideo(mood);
    };
    newVideo.onerror = (err) => {
      setError('Failed to load video. Please try again later.');
      console.error(err);
    };
  };

  const transitionToNextVideo = (mood) => {
    let timeToTransition = (duration - currentTime) * 1000
    setTimeout(() => {
      setIsTransitioning(true);
    videoRef.current.style.opacity = 0;
    setTimeout(() => {
      setVideoSrc(videoData[mood].src);
      videoRef.current.load();
      videoRef.current.play().catch(err => {
        setError("Failed to play video due to user interaction restrictions.");
        console.error(err);
      });
      videoRef.current.style.opacity = 1;
      setIsTransitioning(false);
      setNextMood(null);
    }, 400);
    }, timeToTransition);
  };

  useEffect(() => {
    if (userInteracted && videoRef.current) {
      videoRef.current.play().catch(err => {
        setError("Failed to play video after interaction.");
        console.error(err);
      });
    }
  }, [videoSrc, userInteracted]);


  return (
    <div className="video-player-container">
      {error && <p className="error-message">{error}</p>}

      {!userInteracted ? (
        <div className="enter-screen">
          <button className="enter-button" onClick={handleEnterClick}>
            Enter
          </button>
        </div>
      ) : (
        <>
          <div className="video-display">
            <video
              ref={videoRef}
              className="video-layer active"
              //controls
              autoPlay
              loop
              src={videoSrc}
              onPlay={() => setIsPlaying(true)}
              onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
          <div style={{color:"black"}}>{currentTime}/{duration}</div>
          <div className="mood-buttons">
            <button className="mood-button" onClick={() => handleMoodChange('happy')}>Happy</button>
            <button className="mood-button" onClick={() => handleMoodChange('sad')}>Sad</button>
            <button className="mood-button" onClick={() => handleMoodChange('angry')}>Angry</button>
          </div>
        </>
      )}
    </div>
  );
}
