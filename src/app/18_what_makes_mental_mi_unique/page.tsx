"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_18WhatMakesMentalMIUnique.css';

export default function _18WhatMakesMentalMIUnique() {
  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">mental:mi</div>
        <nav className="nav">
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Lets Connect</a></li>
            <li><a href="#" className="login">Login</a></li>
          </ul>
        </nav>
      </header>

      <section className="intro-section">
        <h1>INTRODUCING MENTAL:MI</h1>
        <div className="content-wrapper">
          <div className="carousel">
            <button className="carousel-left">&lt;</button>
            <div className="carousel-content">
              <h2>mental:mi - a companion for mental wellness</h2>
              <p>Welcome to Mental:Mi, the ultimate app designed to empower you on your journey towards better mental health and overall well-being.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="image-slide">
              <img src="your-image-source-here" alt="Mental Wellness" />
            </div>
            <button className="carousel-right">&gt;</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>What makes mental:mi unique?</h2>
        <ul className="features-list">
          <li>
            <h3>Personalized Self-Care</h3>
            <button className="learn-more-btn">Learn More</button>
          </li>
          <li>
            <h3>Expert Guidance</h3>
            <button className="learn-more-btn">Learn More</button>
          </li>
          <li>
            <h3>Supportive Community</h3>
            <button className="learn-more-btn">Learn More</button>
          </li>
          <li>
            <h3>Innovative Tools</h3>
            <button className="learn-more-btn">Learn More</button>
          </li>
        </ul>
        <div className="video-section">
          <h3>Watch more about our app</h3>
          <video src="your-video-source-here" controls></video>
        </div>
      </section>

      <section className="footer-section">
        <h2>Care your mind with mental:mi</h2>
        <p>We implement AI technology to enhance your mental wellness journey.</p>
        <button className="download-btn">Download App</button>
      </section>
    </div>
  );
}
