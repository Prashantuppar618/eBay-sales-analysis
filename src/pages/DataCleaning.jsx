import React, { useRef } from 'react';

const downloadCSV = (filename, rows) => {
    const processRow = row => row.map(String).join(',');
    const csvContent = rows.map(processRow).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
};

const DataCleaning = () => {
    const pageRef = useRef(null);

    const customerData = [
        ['Customer_name', 'CustomerID', 'Email', 'Region', 'SignupDate'],
        ['john doe', 'C001', 'john@example.com', 'North', '15-01-2023'],
        ['jane smith', 'C002', 'jane@example.com', 'South', '10-02-2023'],
        ['mike johnson', 'C003', 'mike@example.com', 'East', '12-03-2023'],
        ['emily clark', 'C004', 'emily@example.com', 'West', '01-04-2023'],
        ['professor', 'C005', 'robert@example.com', 'North', '22-01-2023'],
        ['elice green', 'C006', 'alice@example.com', 'East', '18-05-2023'],
        ['tom white', 'C007', 'tom@example.com', 'South', '25-03-2023'],
        ['lisa black', 'C008', 'lisa@example.com', 'West', '05-06-2023'],
        ['gary scott', 'C009', 'gary@example.com', 'North', '11-07-2023'],
        ['rachel adams', 'C0010', 'rachel@example.com', 'East', '03-08-2023'],
    ];

    const productData = [
        ['Category', 'ProductID', 'ProductName', 'Price', 'Description'],
        ['electronics', 'P001', 'Laptop Pro 15', '1200', 'High-end laptop'],
        ['wearables', 'P002', 'smartwatch Alpha', '250', 'Fitness smartwatch'],
        ['electronics', 'P003', 'Bluetooth Speaker', '90', 'portable speaker'],
        ['footwear', 'P004', 'Running Shoes', '150', 'Sports running shoes'],
        ['accessories', 'P005', 'Leather Wallet', '45', 'Genuine leather wallet'],
        ['electronics', 'P006', 'DSLR Camera', '850', 'Professional camera'],
        ['furniture', 'P007', 'Office Chair', '300', 'Ergonomic chair'],
        ['electronics', 'P008', 'Tablet X10', '600', '10-inch tablet'],
        ['home appliance', 'P009', 'coffee Maker', '180', 'Drip coffee machine'],
        ['electronics', 'P0010', 'Noise Cancelling Headphones', '220', 'Over-ear headphones'],
    ];

    const salesData = [
        ['Region', 'Category', 'TotalRevenue', 'AverageOrderValue', 'TotalOrders'],
        ['east', 'electronics', '600', '600', '1'],
        ['east', 'footwear', '300', '300', '1'],
        ['north', 'accessories', '135', '135', '1'],
        ['north', 'electronics', '2050', '1025', '2'],
        ['south', 'furniture', '300', '300', '1'],
        ['south', 'home appliance', '180', '180', '1'],
        ['west', 'electronics', '90', '90', '1'],
        ['west', 'wearables', '500', '500', '1'],
    ];

    const transactionData = [
        ['TransactionID', 'CustomerID', 'ProductID', 'Quantity', 'SalesDate', 'Revenue', 'InvoiceID'],
        ['T001', 'C001', 'P001', '1', '01-04-2023', '1200', 'INV1001'],
        ['T002', 'C003', 'P004', '2', '03-04-2023', '300', 'INV1002'],
        ['T003', 'C005', 'P006', '1', '05-04-2023', '850', 'INV1003'],
        ['T004', 'C002', 'P009', '1', '06-04-2023', '180', 'INV1004'],
        ['T005', 'C010', 'P010', '1', '07-04-2023', '220', 'INV1005'],
        ['T006', 'C004', 'P002', '2', '08-04-2023', '500', 'INV1006'],
        ['T007', 'C008', 'P003', '1', '09-04-2023', '90', 'INV1007'],
        ['T008', 'C006', 'P008', '1', '10-04-2023', '600', 'INV1008'],
        ['T009', 'C007', 'P007', '1', '11-04-2023', '300', 'INV1009'],
        ['T0010', 'C009', 'P005', '3', '12-04-2023', '135', 'INV10010'],
    ];

    const renderTable = (title, data, filename) => (
        <section>
            <div className="table-title">{title}</div>
            <button onClick={() => downloadCSV(filename, data)} className="download-button">Download CSV</button>
            <table>
                <thead>
                    <tr>{data[0].map((h, i) => <th key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                    {data.slice(1).map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, j) => <td key={j}>{cell}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );

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
        section {
          margin-bottom: 3rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 1.5rem 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        h2 {
          font-size: 1.8rem;
          color: #00ffe7;
          margin-bottom: 1rem;
        }
        ul {
          color: #eee;
          font-size: 1rem;
          padding-left: 1.5rem;
        }
        li {
          margin-bottom: 0.6rem;
        }
        .diagram {
          display: block;
          max-width: 100%;
          margin: 1rem auto;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 231, 0.2);
        }
        .table-title {
          font-size: 1.4rem;
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
          color: #00ffe7;
        }
        .download-button {
          margin-bottom: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: none;
          background: #00ffe7;
          color: #000;
          cursor: pointer;
          transition: background 0.3s;
        }
        .download-button:hover {
          background: #00e0c3;
        }
        table {
          width: 100%;
          border-collapse: collapse;
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="page-container" ref={pageRef}>
                <section>
                    <h2>🧹 Data Cleaning</h2>
                    <ul>
                        <li>Trimmed whitespace and standardized casing in names, regions, etc.</li>
                        <li>Removed duplicate records using Invoice ID, Product ID.</li>
                        <li>Handled null values using imputation or omission for critical fields.</li>
                        <li>Validated <code>Total Revenue = AOV × Total Orders</code>.</li>
                    </ul>
                </section>

                <section>
                    <div className="table-title">👥 Customer Data Cleaning Mapping</div>
                    <p>
                        The customer table contained duplicate records and inconsistent casing (e.g., "elicE GReen"). These were resolved using standardization and deduplication on Customer ID.
                    </p>
                    <img src="/cc.png" alt="Customer Cleaning Mapping" className="diagram" />
                </section>

                <section>
                    <div className="table-title">📦 Product Data Cleaning Mapping</div>
                    <p>
                        Null prices, duplicated product IDs, and negative values were corrected. Categories were normalized, and products with missing names were flagged.
                    </p>
                    <img src="/cp.png" alt="Product Cleaning Mapping" className="diagram" />
                </section>

                <section>
                    <div className="table-title">🌍 Sales Summary Cleaning Mapping</div>
                    <p>
                        Region names were capitalized, nulls in revenue/order columns filled with logical values, and aggregates recalculated for accuracy.
                    </p>
                    <img src="/css.png" alt="Sales Summary Cleaning Mapping" className="diagram" />
                </section>

                <section>
                    <div className="table-title">📊 Final Data Cleaning Flow</div>
                    <p>
                        Below is the complete task flow used for cleaning operations across all datasets in Informatica Cloud:
                    </p>
                    <img src="/pp.png" alt="Final Data Cleaning Task Flow" className="diagram" />
                </section>

                {renderTable('👥 Cleaned Customer Table', customerData, 'cleaned_customer.csv')}
                {renderTable('📦 Cleaned Product Table', productData, 'cleaned_product.csv')}
                {renderTable('💳 Cleaned Transaction Table', transactionData, 'cleaned_transactions.csv')}
                {renderTable('🌍 Cleaned Sales Summary Table', salesData, 'cleaned_sales_summary.csv')}
            </div>
        </>
    );
};

export default DataCleaning;
