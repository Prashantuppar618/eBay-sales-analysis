import React from 'react';

const DataCleaning = () => (
    <div className="page">
        <h2>Data Cleaning</h2>
        <ul>
            <li>Trimmed whitespace and standardized casing in names, regions, etc.</li>
            <li>Removed duplicate records using Invoice ID, Product ID.</li>
            <li>Handled null values using imputation or omission for critical fields.</li>
            <li>Validated `Total Revenue = AOV × Total Orders`.</li>
        </ul>
    </div>
);

export default DataCleaning;
