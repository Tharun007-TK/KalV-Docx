import React from 'react';

            const FilterSection = () => {
                return (
                    <div className="filter-section">
                        <h3>Contract Location</h3>
                        <div>
                            <input type="radio" id="all-locations" name="location" defaultChecked />
                            <label htmlFor="all-locations">All locations</label>
                        </div>
                        <div>
                            <input type="radio" id="region" name="location" />
                            <label htmlFor="region">Region</label>
                        </div>
                        <div>
                            <input type="radio" id="postcode" name="location" />
                            <label htmlFor="postcode">Postcode</label>
                        </div>
                        <h3>Procurement Stage</h3>
                        <div>
                            <input type="checkbox" id="early-engagement" defaultChecked />
                            <label htmlFor="early-engagement">Early engagement</label>
                        </div>
                        <div>
                            <input type="checkbox" id="future-opportunity" defaultChecked />
                            <label htmlFor="future-opportunity">Future opportunity</label>
                        </div>
                    </div>
                );
            };

            export default FilterSection;