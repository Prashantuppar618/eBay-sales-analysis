import React from 'react';

const DataCollection = () => (
    <div className="page">
        <h2>Data Collection and Synchronization</h2>
        <p>
            Data from multiple CSVs and SQL databases were collected. Harmonization involved standardizing
            casing, trimming spaces, handling nulls, and ensuring consistency across files like:
        </p>
        <ul>
            <li>products.csv</li>
            <li>customers.csv</li>
            <li>transactions.csv</li>
            <li>region performance.csv</li>
        </ul>
        <p>Automated pipelines via Informatica Cloud were used to sync this data into a unified dataset.</p>
    </div>
);

export default DataCollection;
