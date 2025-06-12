import React from 'react';

const Splash = () => (
    <>
        <style>{`
      body {
        margin: 0;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        font-family: 'Segoe UI', sans-serif;
      }

      .splash-page {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 90vh;
        padding: 2rem;
        animation: fadeIn 1s ease-in-out;
      }

      .splash-box {
        background: rgba(30, 30, 30, 0.75);
        backdrop-filter: blur(12px);
        border-radius: 16px;
        padding: 3rem 4rem;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
        text-align: center;
        color: #f0f0f0;
        max-width: 750px;
        animation: zoomIn 0.6s ease-out;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .splash-title {
        font-size: 2.7rem;
        color: #00ffe7;
        font-weight: bold;
        text-shadow: 0 0 8px #00ffe7;
        margin-bottom: 1rem;
      }

      .splash-subtitle {
        font-size: 1.25rem;
        color: #bbbbbb;
        margin-bottom: 2rem;
      }

      .team-info {
        text-align: left;
        color: #dddddd;
        font-size: 1.05rem;
        line-height: 1.75;
        margin-top: 1rem;
        border-top: 1px solid #444;
        padding-top: 1.5rem;
      }

      .team-info p {
        margin: 0.3rem 0;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes zoomIn {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @media (max-width: 768px) {
        .splash-box {
          padding: 2rem;
        }
        .splash-title {
          font-size: 2rem;
        }
        .team-info {
          font-size: 0.95rem;
        }
      }
    `}</style>

        <div className="splash-page">
            <div className="splash-box">
                <div className="splash-title">
                    📊 Sales Management Data Integration using IICS
                </div>
                <div className="splash-subtitle">
                    A Project on Informatica Intelligent Cloud Services
                </div>
                <div className="team-info">
                    <p><strong>Team Members:</strong></p>
                    <p>Prashanth Uppar (02FE22BCS069)</p>
                    <p>Stuti K Hunachagi (02FE22BCS154)</p>
                    <p>Pooja A Kugatoli (02FE22BCS065)</p>
                    <p>Prathamesh Kittur (02FE22BCS070)</p>
                    <p><strong>Guide:</strong> Prof. Anita Kenchannavar</p>
                    <p>KLE Technological University’s Dr. MSSCET, Belagavi</p>
                </div>
            </div>
        </div>
    </>
);

export default Splash;
