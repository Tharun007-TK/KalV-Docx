import React from 'react';
import './Resultslist.css';

const ResultsList = () => {
  const results = [
    { id: 1, title: 'IT Support Services', date: '2024-12-01' },
    { id: 2, title: 'Construction Contract', date: '2024-11-15' },
  ];

  return (
    <div className="results-list">
      {results.map((result) => (
        <div key={result.id} className="result-card">
          <h3>{result.title}</h3>
          <p>Deadline: {result.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
