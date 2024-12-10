import React from 'react';
import './Filterpannel.css';

const FilterPanel = () => {
  return (
    <aside className="filter-panel">
      <h2>Filters</h2>
      <label>
        Category:
        <select>
          <option>All Categories</option>
          <option>IT</option>
          <option>Construction</option>
          <option>Healthcare</option>
        </select>
      </label>
    </aside>
  );
};

export default FilterPanel;
