import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const cellStyle = {
    padding: '0.75rem',
    border: '1px solid #555',
    textAlign: 'left',
    color: '#eee'
};

const chartOptions = {
    responsive: true,
    animation: { duration: 2000 },
    plugins: {
        legend: { labels: { color: '#fff' } },
        tooltip: { bodyColor: '#fff', titleColor: '#fff' }
    },
    scales: {
        x: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
        y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } }
    }
};

const downloadCSV = () => {
    const data = [
        ['Region', 'Revenue', 'Avg Order Value', 'Top Product'],
        ['East', '900', '1', 'Tablet X10'],
        ['North', '2185', '2', 'Tablet X10'],
        ['South', '480', '1', 'Office Chair'],
        ['West', '590', '1', 'Tablet X10']
    ];

    const csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'regional_insights.csv');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Results = () => {
    const revenueData = {
        labels: ['East', 'North', 'South', 'West'],
        datasets: [
            {
                label: 'Revenue by Region',
                data: [900, 2185, 480, 590],
                backgroundColor: ['#00ffe7', '#62dafb', '#00bcd4', '#00838f']
            }
        ]
    };

    const avgOrderData = {
        labels: ['East', 'North', 'South', 'West'],
        datasets: [
            {
                label: 'Avg Order Value',
                data: [1, 2, 1, 1],
                backgroundColor: ['#f06292', '#9575cd', '#4db6ac', '#ffb74d']
            }
        ]
    };

    const topProductData = {
        labels: ['Tablet X10', 'Office Chair'],
        datasets: [
            {
                label: 'Top Product Frequency',
                data: [3, 1],
                backgroundColor: ['#00bcd4', '#ff7043']
            }
        ]
    };

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
                canvas {
                    margin: 1rem 0;
                    background: rgba(255,255,255,0.05);
                    padding: 1rem;
                    border-radius: 12px;
                    max-width: 700px;
                    max-height: 400px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                button.download {
                    margin-top: 1rem;
                    padding: 10px 20px;
                    background-color: #00bcd4;
                    border: none;
                    border-radius: 8px;
                    color: #000;
                    font-weight: bold;
                    cursor: pointer;
                }
                button.download:hover {
                    background-color: #00ffe7;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <div className="page-container">
                <h2>Results & Conclusion</h2>
                <p>
                    The system successfully integrated scattered data, cleaned it, and enabled insights generation.
                    This improved operational efficiency, sales forecasting, and promotional targeting.
                </p>
                <p>
                    Informatica Cloud’s ETL capabilities proved effective for building robust pipelines
                    with scheduling, cleansing, and dashboarding functionality.
                </p>

                <h2>📊 Revenue Insights by Region</h2>
                <Bar data={revenueData} options={chartOptions} />

                <h2>💳 Average Order Value</h2>
                <Bar data={avgOrderData} options={chartOptions} />

                <h2>⭐ Top-Selling Products</h2>
                <Pie data={topProductData} options={chartOptions} />

                <h2>🧾 Combined Regional Summary Table</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.2rem', color: '#eee', fontSize: '0.95rem' }}>
                    <thead>
                        <tr>
                            <th style={{ ...cellStyle, backgroundColor: '#00bcd4', color: '#000' }}>Region</th>
                            <th style={{ ...cellStyle, backgroundColor: '#00bcd4', color: '#000' }}>Revenue</th>
                            <th style={{ ...cellStyle, backgroundColor: '#00bcd4', color: '#000' }}>Avg Order Value</th>
                            <th style={{ ...cellStyle, backgroundColor: '#00bcd4', color: '#000' }}>Top Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={cellStyle}>East</td><td style={cellStyle}>900</td><td style={cellStyle}>1</td><td style={cellStyle}>Tablet X10</td></tr>
                        <tr><td style={cellStyle}>North</td><td style={cellStyle}>2185</td><td style={cellStyle}>2</td><td style={cellStyle}>Tablet X10</td></tr>
                        <tr><td style={cellStyle}>South</td><td style={cellStyle}>480</td><td style={cellStyle}>1</td><td style={cellStyle}>Office Chair</td></tr>
                        <tr><td style={cellStyle}>West</td><td style={cellStyle}>590</td><td style={cellStyle}>1</td><td style={cellStyle}>Tablet X10</td></tr>
                    </tbody>
                </table>
                <button className="download" onClick={downloadCSV}>⬇️ Download as CSV</button>

                <h2>🔚 Final Conclusion</h2>
                <p>
                    By integrating diverse sources and applying transformations in Informatica Cloud, this project demonstrated a streamlined approach to data unification. The rich visual insights through charts and mapping boosted transparency in sales operations, empowering teams to make informed decisions.
                </p>
                <p>
                    The regional analysis confirmed balanced product distribution and consistent order values, aiding stock planning and targeted marketing strategies for each region.
                </p>
            </div>
        </>
    );
};

export default Results;
