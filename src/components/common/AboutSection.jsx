import React, { useRef } from 'react';
import { Link } from "react-router-dom";
// Import style file
import '../../styles/components/aboutsection.css';

const AboutSection = () => {
    const gifRef = useRef(null);

    const handleMouseOver = (event) => {
        const gifContainer = gifRef.current;
        const gifUrl = event.target.getAttribute('data-gif');
        gifContainer.style.display = 'block';
        gifContainer.style.backgroundImage = `url(${gifUrl})`;
    };

    const handleMouseOut = () => {
        const gifContainer = gifRef.current;
        gifContainer.style.display = 'none';
    };

    return (
        <section id='home-about' className='about-section'>
            <div className='angle-top'></div>
            <div className="section-inner">
                <h2>about</h2>
                <div className="inner-wide">
                    <div ref={gifRef} className="gif-container"></div>
                    <p><strong className="gif" data-gif="gif-1.gif" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Driven by limitless ideas and imagination.</strong> I will be a developer who constantly strives  for endless development and problem-solving. With the skills I have learned, I will maintain an attitude of continuous growth by staying updated with the latest trends ans tools</p>
                    <p><strong className="gif" data-gif="gif-2.gif" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>If you're not making mistakes, you're not doing anything.</strong> I believe that challenging moments are inevitable for everyone. However, the ultimate  purpose of these challenges is to learn and <strong className="gif" data-gif="gif-3.gif" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>grow from the experience.</strong> By approaching even the smallest problems with patience and resilience, fostering communication with those around me, and turning each experience into an opportunity for personal growth, I strive to maintain a healthy work-life balance while continually progressing in my journey.</p>
                    <div className="about-link-container">
                        <Link to="/about" className="about-link">more about me</Link>
                    </div>
                </div>
            </div>
            <div className='angle-bottom'></div>
        </section>
    );
}

export default AboutSection;