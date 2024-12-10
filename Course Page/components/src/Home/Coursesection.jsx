import React from 'react';
import './Coursesection.css';

const CoursesSection = () => {
    return (
        <section id="courses" className="courses-section">
            <h2>Courses Offered</h2>
            <div className="course-list">
                <div className="course-item">
                    <h3>Advanced Aerodynamics</h3>
                    <p>Learn about the latest techniques in aerodynamics.</p>
                </div>
                <div className="course-item">
                    <h3>Computational Fluid Dynamics</h3>
                    <p>Explore the world of CFD for aerospace applications.</p>
                </div>
                <div className="course-item">
                    <h3>Spacecraft Engineering</h3>
                    <p>Design and analyze spacecraft for various missions.</p>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
