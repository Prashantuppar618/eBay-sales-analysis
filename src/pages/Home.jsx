import React from 'react';

const Home = () => (
    <>
        <style>{`
      body {
        margin: 0;
        padding: 0;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        min-height: 100vh;
      }

      .page-container {
        max-width: 1000px;
        margin: 4rem auto;
        padding: 2.5rem 3rem;
        background-color: rgba(30, 30, 30, 0.95);
        color: #f5f5f5;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        border-radius: 15px;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.6);
        animation: fadeIn 0.8s ease-in-out;
      }

      h1 {
        font-size: 2rem;
        color: #00ffe7;
        position: relative;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
      }

      h1::after {
        content: '';
        display: block;
        width: 80px;
        height: 3px;
        background: #00ffe7;
        margin-top: 6px;
        border-radius: 2px;
      }

      h2 {
        font-size: 1.6rem;
        color: #00bcd4;
        margin-top: 2rem;
        border-left: 4px solid #00bcd4;
        padding-left: 12px;
      }

      h3 {
        font-size: 1.3rem;
        color: #62dafb;
        margin-top: 1.5rem;
        border-left: 4px solid #62dafb;
        padding-left: 10px;
      }

      p {
        font-size: 1.08rem;
        line-height: 1.8;
        margin-top: 0.8rem;
        color: #dddddd;
      }

      ul {
        padding-left: 1.5rem;
        margin-top: 0.8rem;
        color: #d6d6d6;
      }

      li {
        margin-bottom: 0.5rem;
        font-size: 1.05rem;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>

        <div className="page-container">
            <h1>Chapter 1: Introduction</h1>

            <h2>1.1 Background</h2>
            <p>
                In the modern retail landscape, businesses generate large volumes of sales data stored in disparate formats,
                often across multiple CSV files and database systems. Efficiently integrating, cleansing, and analyzing this
                data is crucial for generating accurate reports and supporting decision-making. This project leverages
                Informatica Cloud to build an ETL pipeline that extracts, transforms, and loads sales-related data into a
                unified system, enabling meaningful insights and performance monitoring.
            </p>

            <h2>1.2 Problem Statement</h2>
            <p>
                A retail company maintains sales records, customer details, and product catalogs across multiple CSV files and
                SQL Server databases. However, these datasets are often siloed, inconsistent, and difficult to integrate,
                leading to inaccurate sales reports and inefficient tracking of key metrics. The company needs a data integration
                solution that can clean and consolidate information, remove duplicate records, and generate actionable insights
                for business growth.
            </p>

            <h2>1.3 Objectives</h2>
            <ul>
                <li>To integrate sales records, customer details, and product catalogs from multiple CSV files and SQL Server databases into a unified dataset.</li>
                <li>To clean and standardize data fields such as customer names, product descriptions, and transaction dates for improved consistency and accuracy.</li>
                <li>To eliminate duplicate records using unique identifiers like Invoice ID and Customer ID.</li>
                <li>To generate actionable business insights by computing key sales metrics such as total revenue, average order value, and sales by region or product category.</li>
            </ul>

            <h1>Chapter 2: Requirements Engineering</h1>

            <h2>2.1 Requirements Engineering</h2>
            <h3>2.1.1 Functional Requirements</h3>
            <ul>
                <li>Ability to integrate data from multiple CSV files and SQL Server databases.</li>
                <li>Provide filtering and sorting of sales data by region, time period, and product category.</li>
                <li>Enable data cleansing and deduplication processes.</li>
                <li>Support generation of key business reports (e.g., total revenue, average order value, top-selling products).</li>
                <li>Allow automated scheduling of ETL workflows in Informatica Cloud.</li>
            </ul>

            <h3>2.1.2 Non-Functional Requirements</h3>
            <ul>
                <li>Performance: ETL processes should complete within acceptable processing times.</li>
                <li>Scalability: Solution must handle increasing data volumes without performance degradation.</li>
                <li>Reliability: Ensure consistent, repeatable data processing with logging and error handling.</li>
                <li>Usability: Provide clear, user-friendly dashboards and reports.</li>
                <li>Security: Protect sensitive customer and transaction data through appropriate access controls.</li>
            </ul>

            <h3>2.1.3 Hardware Requirements</h3>
            <ul>
                <li>Processor: Intel i5 or higher.</li>
                <li>RAM: Minimum 8 GB.</li>
                <li>Storage: Minimum 256 GB SSD.</li>
                <li>Network: High-speed internet connection for cloud operations.</li>
            </ul>

            <h3>2.1.4 Software Requirements</h3>
            <ul>
                <li>Informatica Intelligent Cloud Services (IICS) account.</li>
                <li>Database: SQL Server 2019 or higher.</li>
                <li>Spreadsheet software: Microsoft Excel or LibreOffice Calc.</li>
                <li>Operating System: Windows 10/11 or Linux (Ubuntu 20.04 or higher).</li>
            </ul>
        </div>
    </>
);

export default Home;
