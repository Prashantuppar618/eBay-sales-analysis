import React from 'react';

const BusinessAnalysis = () => {
    const sectionStyle = {
        marginBottom: '3rem',
        background: 'rgba(255, 255, 255, 0.02)',
        padding: '1.5rem 2rem',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.05)'
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1.2rem',
        color: '#eee',
        fontSize: '0.95rem'
    };

    const cellStyle = {
        padding: '0.75rem',
        border: '1px solid #555',
        textAlign: 'left'
    };

    const renderTable = (headers, rows) => (
        <table style={tableStyle}>
            <thead>
                <tr>{headers.map((h, i) => <th key={i} style={{ ...cellStyle, backgroundColor: '#00bcd4', color: '#000' }}>{h}</th>)}</tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => <td key={j} style={cellStyle}>{cell}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
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
        img.diagram {
          display: block;
          max-width: 100%;
          margin: 1rem auto;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0, 255, 231, 0.2);
        }
        h2 {
          font-size: 1.5rem;
          color: #00bcd4;
          border-left: 4px solid #00bcd4;
          padding-left: 12px;
          margin-top: 1.5rem;
        }
        p {
          font-size: 1.08rem;
          line-height: 1.8;
          color: #dddddd;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="page-container">
                <section style={sectionStyle}>
                    <h2>📈 Analyzing Sales in a Specific Region</h2>
                    <p>The company wants to understand sales performance in the South region to optimize marketing efforts.</p>
                    <img src="/b1.png" alt="Mapping 1" className="diagram" />
                    {renderTable(['Region', 'TotalSales', 'AvgOrderValue', 'TopProductID', 'ReportMonth'], [['South', '800', '400', 'P004', '2023-04']])}
                </section>

                <section style={sectionStyle}>
                    <h2>📊 Filtering Sales Transactions</h2>
                    <p>Report on sales activity during April 6 to April 12, 2023 for trend analysis.</p>
                    <img src="/b2.png" alt="Mapping 2" className="diagram" />
                    {renderTable(['total_sales'], [['10']])}
                </section>

                <section style={sectionStyle}>
                    <h2>🧾 Retrieving a Customer’s Invoice</h2>
                    <p>Verify the invoice details for Invoice ID INV1006.</p>
                    <img src="/b3.png" alt="Mapping 3" className="diagram" />
                    {renderTable(['InvoiceID', 'cust_CustomerName'], [['INV1006', 'Emily Clark']])}
                </section>

                <section style={sectionStyle}>
                    <h2>🛒 Fetching Product Details for a Customer</h2>
                    <p>Customer ID C008 queried for purchased products.</p>
                    <img src="/b4.png" alt="Mapping 4" className="diagram" />
                    {renderTable(['CustomerID', 'prd_ProductName', 'prd_Category', 'prd_Price', 'prd_Description'], [['C008', 'Bluetooth Speaker', 'Electronics', '90', 'Portable speaker']])}
                </section>

                <section style={sectionStyle}>
                    <h2>💰 Sorting Transactions by Revenue</h2>
                    <p>Identify top revenue-generating transactions.</p>
                    <img src="/b5.png" alt="Mapping 5" className="diagram" />
                    {renderTable(
                        ['TransactionID', 'CustomerID', 'ProductID', 'Quantity', 'SalesDate', 'Revenue', 'InvoiceID'],
                        [
                            ['T001', 'C001', 'P001', '1', '2023-04-01', '1200', 'INV1001'],
                            ['T003', 'C005', 'P006', '1', '2023-04-05', '850', 'INV1003'],
                            ['T008', 'C006', 'P008', '1', '2023-04-10', '600', 'INV1008'],
                            ['T006', 'C004', 'P002', '2', '2023-04-08', '500', 'INV1006'],
                            ['T002', 'C003', 'P004', '2', '2023-04-03', '300', 'INV1002'],
                            ['T009', 'C007', 'P007', '1', '2023-04-11', '300', 'INV1009'],
                            ['T005', 'C010', 'P010', '1', '2023-04-07', '220', 'INV1005'],
                            ['T004', 'C002', 'P009', '1', '2023-04-06', '180', 'INV1004'],
                            ['T0010', 'C009', 'P005', '3', '2023-04-12', '135', 'INV10010'],
                            ['T007', 'C008', 'P003', '1', '2023-04-09', '90', 'INV1007']
                        ]
                    )}
                </section>

                <section style={sectionStyle}>
                    <h2>📅 Sorting Transactions by Date</h2>
                    <p>Track recent transactions for fraud detection.</p>
                    <img src="/b6.png" alt="Mapping 6" className="diagram" />
                    {renderTable(
                        ['TransactionID', 'CustomerID', 'ProductID', 'Quantity', 'SalesDate', 'Revenue', 'InvoiceID'],
                        [
                            ['T0010', 'C009', 'P005', '3', '2023-04-12', '135', 'INV10010'],
                            ['T009', 'C007', 'P007', '1', '2023-04-11', '300', 'INV1009'],
                            ['T008', 'C006', 'P008', '1', '2023-04-10', '600', 'INV1008'],
                            ['T007', 'C008', 'P003', '1', '2023-04-09', '90', 'INV1007'],
                            ['T006', 'C004', 'P002', '2', '2023-04-08', '500', 'INV1006'],
                            ['T005', 'C010', 'P010', '1', '2023-04-07', '220', 'INV1005'],
                            ['T004', 'C002', 'P009', '1', '2023-04-06', '180', 'INV1004'],
                            ['T003', 'C005', 'P006', '1', '2023-04-05', '850', 'INV1003'],
                            ['T002', 'C003', 'P004', '2', '2023-04-03', '300', 'INV1002'],
                            ['T001', 'C001', 'P001', '1', '2023-04-01', '1200', 'INV1001']
                        ]
                    )}
                </section>

                <section style={sectionStyle}>
                    <h2>💹 Revenue Breakdown by Region</h2>
                    <img src="/b7.png" alt="Mapping 7" className="diagram" />
                    {renderTable(['Region', 'Revenue_by_region'], [['East', '900'], ['North', '2185'], ['South', '480'], ['West', '590']])}
                </section>

                <section style={sectionStyle}>
                    <h2>📦 Total Orders by Product Category</h2>
                    <img src="/b8.png" alt="Mapping 8" className="diagram" />
                    {renderTable([
                        'Category', 'orders_by_category'
                    ], [
                        ['Accessories', '1'], ['Electronics', '4'], ['Footwear', '1'], ['Furniture', '1'], ['Home Appliance', '1'], ['Wearables', '1']
                    ])}
                </section>

                <section style={sectionStyle}>
                    <h2>💳 Average Order Value by Region</h2>
                    <img src="/b9.png" alt="Mapping 9" className="diagram" />
                    {renderTable([
                        'Region', 'Avg_order'
                    ], [
                        ['East', '1'], ['North', '2'], ['South', '1'], ['West', '1']
                    ])}
                </section>

                <section style={sectionStyle}>
                    <h2>⭐ Top-Selling Product in Each Region</h2>
                    <img src="/b10.png" alt="Mapping 10" className="diagram" />
                    {renderTable([
                        'Region', 'top_product'
                    ], [
                        ['East', 'Tablet X10'], ['North', 'Tablet X10'], ['South', 'Office Chair'], ['West', 'Tablet X10']
                    ])}
                </section>
            </div>
        </>
    );
};

export default BusinessAnalysis;
