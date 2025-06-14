import React, { useState, useEffect, useRef } from 'react';

const DataCollection = () => {
    const [search, setSearch] = useState('');
    const pageRef = useRef(null);

    useEffect(() => {
        if (search.trim()) {
            const found = Array.from(
                pageRef.current.querySelectorAll('td, th, h1, h2, h3, p, li')
            ).find(el => el.textContent.toLowerCase().includes(search.toLowerCase()));
            if (found) {
                found.scrollIntoView({ behavior: 'smooth', block: 'center' });
                found.style.background = '#004d61';
                setTimeout(() => (found.style.background = ''), 2000);
            }
        }
    }, [search]);

    return (
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
        .search-bar {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }
        .search-input {
          width: 60%;
          padding: 0.6rem 1rem;
          border-radius: 10px;
          border: none;
          font-size: 1rem;
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
        }
        h2 {
          font-size: 1.5rem;
          color: #00bcd4;
          border-left: 4px solid #00bcd4;
          padding-left: 12px;
          margin-top: 1.5rem;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1.2rem;
          color: #eee;
          font-size: 0.95rem;
        }
        th, td {
          padding: 0.75rem;
          border: 1px solid #555;
          text-align: left;
        }
        th {
          background-color: #00bcd4;
          color: #000;
        }
        tr:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .table-title {
          font-size: 1.2rem;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
          color: #00ffe7;
        }
        img.diagram {
          display: block;
          max-width: 100%;
          height:500px;
          margin: 1rem auto;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 231, 0.2);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="page-container" ref={pageRef}>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="🔍 Search anything on this page..."
                        className="search-input"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <section>
                    <h1>Chapter 3: Data Collection and Synchronization</h1>
                    <p>
                        We collected data from Oracle, MySQL, SQL Server, and local flat files (CSVs). Below are the raw tables with redundancy, invalid entries, and formatting issues that will be cleaned in the next stage.
                    </p>
                    <p>
                        🔄 ETL pipelines were built using Informatica Intelligent Cloud Services to sync the sources into a unified staging area.
                    </p>

                    <h2>Data Collection Mapping (To be inserted)</h2>
                    <img src="dc.jpg" alt="Mapping Diagram" className="diagram" />

                    <h2>Entity Relationship Diagram</h2>
                    <img src="/ER diag1.jpg" alt="ER Diagram" className="diagram" />
                </section>

                <section>
                    {/* CUSTOMER TABLE */}
                    <div className="table-title">👥 Customer Data (customer.csv)</div>
                    <table>
                        <thead>
                            <tr>
                                <th>CustomerID</th><th>CustomerName</th><th>Email</th><th>Region</th><th>SignupDate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>C001</td><td>John Doe</td><td>john@example.com</td><td>North</td><td>15-01-2023</td></tr>
                            <tr><td>C002</td><td>Jane Smith</td><td>jane@example.com</td><td>South</td><td>10-02-2023</td></tr>
                            <tr><td>C003</td><td>Mike Johnson</td><td>mike@example.com</td><td>East</td><td>12-03-2023</td></tr>
                            <tr><td>C004</td><td>Emily Clark</td><td>emily@example.com</td><td>West</td><td>01-04-2023</td></tr>
                            <tr><td>C005</td><td>Robert Brown</td><td>robert@example.com</td><td>North</td><td>22-01-2023</td></tr>
                            <tr><td>C006</td><td>elicE GReen</td><td>alice@example.com</td><td>East</td><td>18-05-2023</td></tr>
                            <tr><td>C007</td><td>Tom White</td><td>tom@example.com</td><td>South</td><td>25-03-2023</td></tr>
                            <tr><td>C008</td><td>Lisa Black</td><td>lisa@example.com</td><td>West</td><td>05-06-2023</td></tr>
                            <tr><td>C009</td><td>Gary Scott</td><td>gary@example.com</td><td>North</td><td>11-07-2023</td></tr>
                            <tr><td>C0010</td><td>Rachel Adams</td><td>rachel@example.com</td><td>East</td><td>03-08-2023</td></tr>
                            <tr><td>C002</td><td>Jane Smith</td><td>jane@example.com</td><td>South</td><td>10-02-2023</td></tr>
                            <tr><td>C004</td><td>Emily Clark</td><td>emily@example.com</td><td>West</td><td>01-04-2023</td></tr>
                        </tbody>
                    </table>

                    {/* PRODUCT TABLE */}
                    <div className="table-title">📦 Product Data (product.csv)</div>
                    <table>
                        <thead>
                            <tr>
                                <th>ProductID</th><th>ProductName</th><th>Category</th><th>Price</th><th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>P001</td><td>Laptop Pro 15</td><td>Electronics</td><td>1200</td><td>High-end laptop</td></tr>
                            <tr><td>P002</td><td>smartwatch Alpha</td><td>Wearables</td><td>250</td><td>Fitness smartwatch</td></tr>
                            <tr><td>P003</td><td>Bluetooth Speaker</td><td>Electronics</td><td>90</td><td>portable speaker</td></tr>
                            <tr><td>P004</td><td>Running Shoes</td><td>Footwear</td><td>150</td><td>Sports running shoes</td></tr>
                            <tr><td>P005</td><td>Leather Wallet</td><td>Accessories</td><td>45</td><td>Genuine leather wallet</td></tr>
                            <tr><td>P006</td><td>DSLR Camera</td><td>Electronics</td><td>850</td><td>Professional camera</td></tr>
                            <tr><td>P007</td><td>Office Chair</td><td>Furniture</td><td>300</td><td>Ergonomic chair</td></tr>
                            <tr><td>P008</td><td>Tablet X10</td><td>Electronics</td><td>600</td><td>10-inch tablet</td></tr>
                            <tr><td>P009</td><td>coffee Maker</td><td>Home Appliance</td><td>180</td><td>Drip coffee machine</td></tr>
                            <tr><td>P010</td><td>Noise Cancelling Headphones</td><td>Electronics</td><td>220</td><td>Over-ear headphones</td></tr>
                            <tr><td>P002</td><td>Smartwatch Alpha</td><td>Wearables</td><td></td><td>Fitness smartwatch</td></tr>
                            <tr><td>P003</td><td></td><td>Electronics</td><td>90</td><td>Portable speaker</td></tr>
                            <tr><td>P004</td><td>Running Shoes</td><td>Footwear</td><td>150</td><td>Sports running shoes</td></tr>
                            <tr><td>P006</td><td>DSLR Camera</td><td>Electronics</td><td>-950</td><td>Professional camera</td></tr>
                            <tr><td>P007</td><td>Office Chair</td><td>Furniture</td><td>-300</td><td>Ergonomic chair</td></tr>
                        </tbody>
                    </table>

                    {/* TRANSACTION TABLE */}
                    <div className="table-title">💳 Transaction Data (transaction.csv)</div>
                    <table>
                        <thead>
                            <tr>
                                <th>TransactionID</th><th>CustomerID</th><th>ProductID</th><th>Quantity</th><th>SalesDate</th><th>Revenue</th><th>InvoiceID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>T001</td><td>C001</td><td>P001</td><td>1</td><td>01-04-2023</td><td>1200</td><td>INV1001</td></tr>
                            <tr><td>T002</td><td>C003</td><td>P004</td><td>2</td><td>03-04-2023</td><td>300</td><td>INV1002</td></tr>
                            <tr><td>T003</td><td>C005</td><td>P006</td><td>1</td><td>05-04-2023</td><td>850</td><td>INV1003</td></tr>
                            <tr><td>T004</td><td>C002</td><td>P009</td><td>1</td><td>06-04-2023</td><td>180</td><td>INV1004</td></tr>
                            <tr><td>T005</td><td>C010</td><td>P010</td><td>1</td><td>07-04-2023</td><td>220</td><td>INV1005</td></tr>
                            <tr><td>T006</td><td>C004</td><td>P002</td><td>2</td><td>08-04-2023</td><td>500</td><td>INV1006</td></tr>
                            <tr><td>T007</td><td>C008</td><td>P003</td><td>1</td><td>09-04-2023</td><td>90</td><td>INV1007</td></tr>
                            <tr><td>T008</td><td>C006</td><td>P008</td><td>1</td><td>10-04-2023</td><td>600</td><td>INV1008</td></tr>
                            <tr><td>T009</td><td>C007</td><td>P007</td><td>1</td><td>11-04-2023</td><td>300</td><td>INV1009</td></tr>
                            <tr><td>T010</td><td>C009</td><td>P005</td><td>3</td><td>12-04-2023</td><td>135</td><td>INV10010</td></tr>
                        </tbody>
                    </table>

                    {/* REGION PERFORMANCE TABLE */}
                    <div className="table-title">🌍 Region Summary (sales_summary.csv)</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Region</th><th>Category</th><th>TotalRevenue</th><th>AverageOrderValue</th><th>TotalOrders</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>East</td><td>Electronics</td><td>600</td><td>600</td><td>1</td></tr>
                            <tr><td>East</td><td>footwear</td><td>300</td><td>300</td><td>1</td></tr>
                            <tr><td>north</td><td>Accessories</td><td>135</td><td>135</td><td>1</td></tr>
                            <tr><td>North</td><td>electronics</td><td>2050</td><td>1025</td><td>2</td></tr>
                            <tr><td>South</td><td>Furniture</td><td>300</td><td>300</td><td>1</td></tr>
                            <tr><td>South</td><td>Home Appliance</td><td>180</td><td>180</td><td>1</td></tr>
                            <tr><td>West</td><td>Electronics</td><td>90</td><td>90</td><td>1</td></tr>
                            <tr><td>West</td><td>Wearables</td><td>500</td><td>500</td><td>1</td></tr>
                            <tr><td>West</td><td>Wearables</td><td>500</td><td>1023</td><td>1</td></tr>
                            <tr><td>North</td><td></td><td>3421</td><td>1025</td><td>3</td></tr>
                            <tr><td>South</td><td>Furniture</td><td>756</td><td>300</td><td>2</td></tr>
                            <tr><td>East</td><td>Footwear</td><td></td><td>300</td><td>0</td></tr>
                            <tr><td>West</td><td></td><td>900</td><td>90</td><td>1</td></tr>
                        </tbody>
                    </table>
                </section>


            </div>
        </>
    );
};

export default DataCollection;
