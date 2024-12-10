import React from 'react';
import './Whycourse.css';

const WhyThisCourse = () => {
    return (
        <div className="why-this-course">
            <div className="content">
                <h2>Why this course?</h2>
                <p>
                    With its blend of skills-based and subject-specific material, this course aims to provide students with generic practical skills and cutting-edge knowledge adaptable to the wide variety of applications in the field of aerospace computational engineering. By undertaking this MSc, you will enhance your skills through a detailed introduction to the state-of-the-art computational methods and their applications for digital age aerospace engineering applications.
                </p>
                <p>
                    The course provides a unique opportunity for cross-disciplinary education and knowledge transfer in the computational engineering of fluid and solid mechanics for aerospace industrial applications. Focusing on fully integrated digital design for aerospace applications, you will be able to understand and implement numerical methods on various computing platforms for aerospace applications. As a graduate, you will meet the demand of an evolving workplace that requires highly qualified engineers possessing core software engineering skills together with competency in mathematical analysis techniques.
                </p>
                <p>
                    Sharing modules with the <a href="#">MSc in Computational Fluid Dynamics</a> and the <a href="#">MSc in Computational and Software Techniques in Engineering</a>, this course gives you the opportunity to interact with students from other disciplines.
                </p>
            </div>
            <div className="sidebar">
                <div className="ranking">
                    <h3>Top 30 in the world</h3>
                    <p>for Engineering – Mechanical and Aeronautical</p>
                    <p>QS World University Rankings by Subject 2024</p>
                </div>
                <img
                    src="https://example.com/airplane-image.jpg" // Replace with the actual image URL
                    alt="Aerospace postgraduate courses"
                    className="aerospace-image"
                />
            </div>
        </div>
    );
};

export default WhyThisCourse;
