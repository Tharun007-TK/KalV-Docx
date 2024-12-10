import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="course-details">
            <div className="details-left">
                <h1>Overview</h1>
                <div className="overview-info">
                    <p><strong>Start date:</strong> September</p>
                    <p><strong>Duration:</strong> Full-time: MSc - one year; Part-time: MSc - up to three years; Full-time PgCert - one year; Part-time PgCert - two years; Full-time PgDip - one year, Part-time PgDip - two years</p>
                    <p><strong>Delivery:</strong> Taught modules: 40%, group project: 20%, individual research project: 40%</p>
                    <p><strong>Qualification:</strong> MSc, PgDip, PgCert</p>
                    <p><strong>Study type:</strong> Full-time / Part-time</p>
                    <p><strong>Campus:</strong> Cranfield campus</p>
                </div>
                <div className="buttons">
                    <button className="btn fees">Fees and funding</button>
                    <button className="btn entry-requirements">Entry requirements</button>
                </div>
            </div>
            <div className="details-right">
                <h1>Who is it for?</h1>
                <p>
                    This course is suitable for those with backgrounds in mathematics, physics, computer science or an engineering discipline. We also welcome applicants with relevant industrial experience such as qualified engineers working with computational methods wishing to extend their knowledge. The part-time option is suitable for qualified engineers.
                </p>
                <h1>QS rankings</h1>
                <p>
                    Cranfield University has been ranked amongst the world’s top universities in the latest QS World University Rankings by Subject.
                </p>
                <p>
                    In Engineering – Mechanical, Aeronautical and Manufacturing, Cranfield has been ranked 27th in the world and attaining top scores in Employer and Academic Reputation.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;

