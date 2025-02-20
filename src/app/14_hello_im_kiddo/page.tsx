"use client"

import Image from "next/image";

import React, { useState, useEffect } from 'react';
import './_14HelloImKiddo.css';

export default function _14HelloImKiddo() {

  const stepsData = [
      {
          type: 'system',
          message: 'Welcome to Kiddybank!'
      },
      {
          type: 'content',
          title: 'Step 1: Introduction to Kiddybank',
          description: 'Kiddy bank artificial intelligence is considered one of the technologies that can fundamentally change industries. Banking is no exception. We show three possibilities - front investing to ESS financial crime.'
      },
      {
          type: 'content',
          title: 'Step 2: Fintech System Overview',
          description: 'Algorithmic execution of your unpredictable plans through the best fintech solutions.'
      },
      {
          type: 'system',
          message: 'Thank you for using Kiddybank. Download the app to get started!'
      }
  ];
  
  return (
    <div className="container">
        <header className="header">
            <h1>kiddybank</h1>
            <nav className="nav">
                <a href="#">Pricing</a>
            </nav>
        </header>
        <section className="intro-section">
            <h2 className="intro-title">Hello, I am Kiddo.</h2>
            <p className="intro-subtitle">Your buddy, assistant</p>
        </section>

        {stepsData.map((step, index) => (
            <section key={index} className="step-section">
                {step.type === 'system' ? (
                    <div className="system-message">{step.message}</div>
                ) : (
                    <div className="content-message">
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                    </div>
                )}
            </section>
        ))}

        <section className="fintech-section">
            <h2>Fintech system that simply works.</h2>
            <p>Algorithmic execution of your unpredictable plans.</p>
            <button className="download-btn">Download the App</button>
        </section>
        <section className="visual-section">
            <div className="visual-circle"></div>
            <div className="visual-sphere"></div>
        </section>
    </div>
  );
}
