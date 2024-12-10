import React from 'react';
import './Detailsection.css';

const DetailsSection = () => {
    return (
        <section className="details-section">
            <div className="content">
                <h2>
                    Within the next five years there will be a demand for engineers and leaders 
                    who will be using 100% digital techniques for aerospace applications, design and testing.       This unique course covers a wide range of applications focused on aerospace computational aspects.
                </h2>
               
                <p>
                    The MSc in Aerospace Computational Engineering aims to enhance your skills through a detailed introduction 
                    to the state-of-the-art computational methods and their applications for digital age aerospace engineering applications.You will be able to meet the demand of an evolving workplace that requires highly qualified engineers possessing core software engineering skills together with competency in mathematical analysis techniques.
                    
                </p>

                
            </div>
            <aside className="sidebar">
                <div className="sidebar-section">
                    <h3>Get in Touch</h3>
                    <button className="btn primary">Submit an enquiry</button>
                    <p>Admissions</p>
                    <p>T: +44 (0)1234 758082</p>
                </div>
                <div className="sidebar-section">
                    <h3>Aerospace Course Brochure</h3>
                    <p>A detailed insight into our Aerospace MSc courses</p>
                    <button className="btn secondary">Download Brochure</button>
                    <small>* Some information required</small>
                </div>
            </aside>
        </section>
    );
};

export default DetailsSection;
