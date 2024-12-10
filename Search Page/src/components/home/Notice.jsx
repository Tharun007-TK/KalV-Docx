import React, { useState } from "react";
import "./Notice.css";

const Notice = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="content-container">
      {/* Left Filter Panel */}
      <div className="filter-panel">
        <h3>Notice status</h3>
        <p>What notice statuses do you wish to view?</p>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" defaultChecked /> Open (2,280)
          </label>
          <label>
            <input type="checkbox" /> Closed
          </label>
        </div>

        {/* Dropdown Menus */}
        <div className="dropdown-group">
          {[
            "Notice suitability",
            "Notice sector",
            "Location of contract",
            "Value",
            "Industry CPV code",
            "Date range",
          ].map((item, index) => (
            <div key={index} className="dropdown">
              <div
                className="dropdown-header"
                onClick={() => toggleDropdown(item)}
              >
                {item}
              </div>
              {openDropdown === item && (
                <div className="dropdown-content">
                  <p>Dropdown content for {item}...</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="update-btn">Update results</button>
        <button className="reset-btn">Reset</button>
        <button className="save-btn">Save search</button>
        <div className="download-links">
          <a href="#">Download as XML</a>
          <a href="#">Download as CSV</a>
        </div>
      </div>

      {/* Right Results Section */}
      <div className="results">
        <div className="result-item">
          <a href="#" className="result-title">
            PLACE628H Surface Treatment - MICROASPHALTING
          </a>
          <p className="result-organization">Derbyshire County Council</p>
          <p>
            Derbyshire County Council is seeking to appoint a single contractor
            to deliver surface treatment (micro-asphalting) works across the
            county of Derbyshire (excluding Derby City) on both rural and urban
            roads. The delivery of surface treatment will be entirely the
            responsibility of the Contractor. The Contractor shall supply and
            apply all the ...
          </p>
          <ul className="result-details">
            <li>
              <strong>Procurement stage:</strong> Opportunity
            </li>
            <li>
              <strong>Notice status:</strong> Open
            </li>
            <li>
              <strong>Closing:</strong> 17 January 2025, 11am
            </li>
            <li>
              <strong>Contract location:</strong> England
            </li>
            <li>
              <strong>Contract value:</strong> £4,000,000
            </li>
            <li>
              <strong>Publication date:</strong> 9 December 2024
            </li>
          </ul>
        </div>

        <div className="result-item">
          <a href="#" className="result-title">
            BDC Leisure Centres Management
          </a>
          <p className="result-organization">Braintree District Council</p>
          <p>
            This invitation is part of an Early Market Engagement Exercise (EME)
            in relation to the Management of Braintree District Council's
            Leisure Centres.
          </p>
          <ul className="result-details">
            <li>
              <strong>Procurement stage:</strong> Opportunity
            </li>
            <li>
              <strong>Notice status:</strong> Open
            </li>
            <li>
              <strong>Closing:</strong> 20 December 2024, 12am
            </li>
            <li>
              <strong>Contract location:</strong> East of England
            </li>
            <li>
              <strong>Contract value:</strong> £13,800,000
            </li>
            <li>
              <strong>Publication date:</strong> 9 December 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notice;
