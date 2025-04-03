import React from 'react';
// Importing CSS style
import "../../styles/components/mailstone.css";

const MilestoneTimeline = () => {

    return (
        <section className="timeline">
            <div className="container">
                <div className="text-content">
                    <h2>BEGINNING</h2>
                    <p>Into the Machines! as a Machine Operator</p>
                </div>
            </div>

            <div className="container" style={{ animationDelay: "1s" }}>
                <div className="text-content">
                    <h2>PASSION</h2>
                    <p>Junior Rebellion! Junior Hardware Developer</p>
                </div>
            </div>

            <div className="container" style={{ animationDelay: "2s" }}>
                <div className="text-content">
                    <h2>GROWTH</h2>
                    <p>Learning life along the way! Senior Hardware Developer</p>
                </div>
            </div>
            <div className="container" style={{ animationDelay: "3s" }}>
                <div className="text-content">
                    <h2>LIMIT</h2>
                    <p>Hitting the Wall! encountering challenges</p>
                </div>
            </div>
            <div className="container" style={{ animationDelay: "4s" }}>
                <div className="text-content">
                    <h2>LEAP</h2>
                    <p>Stepping onto a bigger stage! Soaring to Canada!</p>
                </div>
            </div>
            <div className="container" style={{ animationDelay: "5s" }}>
                <div className="text-content">
                    <h2>LEARNING</h2>
                    <p>Finding New Path! Mechanic Millwright</p>
                </div>
            </div>
            <div className="container" style={{ animationDelay: "6s" }}>
                <div className="text-content">
                    <h2>FRUSTRATION</h2>
                    <p>Trapped by Limits! facing personal challenges</p>
                </div>
            </div>
            <div className="container" style={{ animationDelay: "7s" }}>
                <div className="text-content">
                    <h2>CHALLENGE</h2>
                    <p>Breaking through! The Never-Ending Journey of Learning</p>
                </div>
            </div>
        </section>
    );
}

export default MilestoneTimeline;