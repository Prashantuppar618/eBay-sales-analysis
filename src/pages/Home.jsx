import React from 'react';

const Home = () => (
    <>
        <style>{`
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        min-height: 100vh;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .page-container {
        max-width: 1100px;
        margin: 3rem auto;
        padding: 2rem;
        border-radius: 20px;
        background: rgba(30, 30, 30, 0.9);
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
        animation: fadeIn 0.6s ease-in-out;
        color: #f5f5f5;
      }

      section {
        margin-bottom: 3rem;
        background: rgba(255, 255, 255, 0.02);
        padding: 1.5rem 2rem;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.05);
      }

      h1 {
        font-size: 2rem;
        color: #00ffe7;
        margin-bottom: 1.2rem;
        position: relative;
      }

      h2 {
        font-size: 1.5rem;
        color: #00bcd4;
        border-left: 4px solid #00bcd4;
        padding-left: 12px;
        margin-top: 1.5rem;
      }

      h3 {
        font-size: 1.25rem;
        color: #62dafb;
        border-left: 4px solid #62dafb;
        padding-left: 10px;
        margin-top: 1rem;
      }

      p {
        font-size: 1.08rem;
        line-height: 1.8;
        color: #dddddd;
      }

      ul {
        padding-left: 1.8rem;
        color: #ccc;
      }

      li {
        margin-bottom: 0.5rem;
        font-size: 1.05rem;
      }

      .insight-box {
        background: rgba(255, 255, 255, 0.08);
        padding: 1rem 1.5rem;
        border-left: 5px solid #00ffe7;
        border-radius: 10px;
        margin: 1rem 0;
        font-size: 1rem;
        color: #d5fefa;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @media (max-width: 768px) {
        .page-container {
          padding: 1.2rem;
        }
        section {
          padding: 1rem;
        }
      }
    `}</style>

        <div className="page-container">
            <section>
                <h1>Chapter 1: Introduction</h1>

                <h2>1.1 Background</h2>
                <p>
                    In the modern retail landscape, businesses generate large volumes of sales data stored in disparate formats.
                    Often, these are across multiple CSV files and database systems. Efficient integration, cleansing, and analysis
                    are crucial for generating accurate reports and supporting decision-making. This project leverages
                    Informatica Cloud to build an ETL pipeline that extracts, transforms, and loads sales-related data into a
                    unified system, enabling meaningful insights and performance monitoring.
                </p>

                <div className="insight-box">
                    🔍 <strong>Insight:</strong> Centralized data pipelines reduce data silos and speed up reporting accuracy.
                </div>

                <h2>1.2 Problem Statement</h2>
                <p>
                    A retail company maintains sales records, customer details, and product catalogs across multiple CSV files and
                    SQL Server databases. These datasets are often inconsistent and difficult to integrate, causing inaccurate sales
                    reports and poor decision-making. A cloud-based data integration solution is required to clean, deduplicate,
                    and unify the data for actionable analytics.
                </p>

                <div className="insight-box">
                    ⚠️ <strong>Problem:</strong> Without integration, data becomes unreliable and difficult to analyze at scale.
                </div>

                <h2>1.3 Objectives</h2>
                <ul>
                    <li>Integrate records from CSV & SQL Server into a unified dataset.</li>
                    <li>Standardize data fields (e.g., names, product descriptions, dates).</li>
                    <li>Remove duplicates using unique IDs (Invoice ID, Customer ID).</li>
                    <li>Compute revenue, order value, regional & product insights.</li>
                </ul>

                <div className="insight-box">
                    🎯 <strong>Goal:</strong> Build a reliable, automated ETL system with strong analytical reporting.
                </div>
            </section>

            <section>
                <h1>Chapter 2: Requirements Engineering</h1>

                <h2>2.1 Requirements Engineering</h2>

                <h3>2.1.1 Functional Requirements</h3>
                <ul>
                    <li>Integrate data from multiple CSV files and SQL Server databases.</li>
                    <li>Enable filtering and sorting of sales data by region, date, and product category.</li>
                    <li>Clean and deduplicate using Informatica Cloud features.</li>
                    <li>Generate key reports like total revenue and top-selling products.</li>
                    <li>Allow ETL task scheduling and automation.</li>
                </ul>

                <h3>2.1.2 Non-Functional Requirements</h3>
                <ul>
                    <li>⏱️ Performance: ETL must complete within acceptable timeframes.</li>
                    <li>📈 Scalability: Must handle growing datasets smoothly.</li>
                    <li>✅ Reliability: Accurate and repeatable execution with error logging.</li>
                    <li>🧑‍💻 Usability: Friendly dashboards and clear insights.</li>
                    <li>🔒 Security: Protect sensitive customer data with proper access controls.</li>
                </ul>

                <h3>2.1.3 Hardware Requirements</h3>
                <ul>
                    <li>Processor: Intel i5 or higher</li>
                    <li>RAM: Minimum 8 GB</li>
                    <li>Storage: Minimum 256 GB SSD</li>
                    <li>Network: High-speed internet for cloud sync</li>
                </ul>

                <h3>2.1.4 Software Requirements</h3>
                <ul>
                    <li>Informatica Intelligent Cloud Services (IICS)</li>
                    <li>SQL Server 2019 or higher</li>
                    <li>Spreadsheet: Microsoft Excel or LibreOffice Calc</li>
                    <li>OS: Windows 10/11 or Ubuntu 20.04+</li>
                </ul>

                <div className="insight-box">
                    🛠️ <strong>Tech Stack:</strong> Informatica Cloud, SQL Server, Excel, Ubuntu/Windows
                </div>
            </section>
        </div>
    </>
);

export default Home;
