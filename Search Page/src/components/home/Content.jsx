import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="search-results-container">
      {/* Content Section */}
      <div className="content">
        {/* Left Filter Panel */}
        <div className="filter-panel">
          <div className="keywords">
            <h3>Keywords</h3>
            <p>Can include contract title, description, buyer, and supplier</p>
            <a href="#">How can I do an advanced search?</a>
            <input type="text" placeholder="Enter keywords..." />
          </div>

          <div className="procurement-stage">
            <h3>Procurement stage</h3>
            <a href="#">Definitions</a>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" defaultChecked />
                Early engagement (220)
              </label>
              <label>
                <input type="checkbox" defaultChecked />
                Future opportunity (172)
              </label>
              <label>
                <input type="checkbox" defaultChecked />
                Opportunity (1,888)
              </label>
              <label>
                <input type="checkbox" />
                Awarded contract
              </label>
            </div>
          </div>
        </div>

        {/* Right Results Section */}
        <div className="results">
          <div className="result-item">
            <h3 className="result-title">PRIOR INFORMATION NOTICE</h3>
            <p className="result-organization">The City of Liverpool College</p>
            <p>
              The City of Liverpool College is looking to place a PIN notice regarding the purchases of PPE/Clothing for all students & staff in the following areas: ...
            </p>
            <ul className="result-details">
              <li><strong>Procurement stage:</strong> Future opportunity</li>
              <li><strong>Notice status:</strong> Open</li>
              <li><strong>Approach to market date:</strong> 9 December 2024</li>
              <li><strong>Contract location:</strong> North West</li>
              <li><strong>Contract value:</strong> £66,000 to £264,000</li>
              <li><strong>Contract end date:</strong> 9 December 2024</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

