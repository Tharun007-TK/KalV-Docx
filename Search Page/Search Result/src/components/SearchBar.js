import React from 'react';

            const SearchBar = () => {
                return (
                    <div className="search-bar">
                        <label htmlFor="keywords">Keywords</label>
                        <input
                            type="text"
                            id="keywords"
                            placeholder="Enter keywords (e.g., contract title, description)"
                        />
                    </div>
                );
            };

            export default SearchBar;