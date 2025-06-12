// src/pages/Splash.jsx
import React from 'react';

const Splash = () => (
    <>
        <style>{`
      .splash-page {
        text-align: center;
        padding: 3rem 2rem;
        background: #121212;
        color: #f5f5f5;
        font-family: 'Segoe UI', sans-serif;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: fadeIn 0.8s ease-in-out;
      }
      .splash-title {
        font-size: 2.5rem;
        color: #00ffe7;
      }
      .splash-subtitle {
        font-size: 1.25rem;
        margin-top: 1rem;
        color: #aaaaaa;
      }
      .team-info {
        margin-top: 2rem;
        font-size: 1rem;
        color: #ccc;
        line-height: 1.8;
      }
    `}</style>
        <div className="splash-page">
            <div className="splash-title">📊 Sales Management Data Integration using IICS</div>
            <div className="splash-subtitle">A Project on Informatica Intelligent Cloud Services</div>
            <div className="team-info">
                <p><strong>Team Members:</strong></p>
                <p>Prashanth Uppar (02FE22BCS069)</p>
                <p>Stuti K Hunachagi (02FE22BCS154)</p>
                <p>Pooja A Kugatoli (02FE22BCS065)</p>
                <p>Prathamesh Kittur (02FE22BCS070)</p>
                <p>Guide: Prof. Anita Kenchannavar</p>
                <p>KLE Technological University’s Dr. MSSCET, Belagavi</p>
            </div>
        </div>
    </>
);

export default Splash;
