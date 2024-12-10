import React from 'react';

            const ResultsList = () => {
                const dummyResults = [
                    {
                        title: "Bishops and Cathedral Buildings Salix Air Source Heat Pumps",
                        location: "LN2 5HQ",
                        value: "£0 to £300,000",
                        closingDate: "14 January 2025"
                    },
                    {
                        title: "Proposed Contract for the Design and Installation of Jetty",
                        location: "Arrow Valley Lake",
                        value: "TBD",
                        closingDate: "31 December 2024"
                    }
                ];

                return (
                    <div className="results-list">
                        <h3>Search Results</h3>
                        <ul>
                            {dummyResults.map((result, index) => (
                                <li key={index}>
                                    <h4>{result.title}</h4>
                                    <p>Location: {result.location}</p>
                                    <p>Value: {result.value}</p>
                                    <p>Closing Date: {result.closingDate}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            };

            export default ResultsList;