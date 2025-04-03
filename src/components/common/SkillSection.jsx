import React from 'react';
// Importing CSS style
import '../../styles/components/skillsection.css';

const SkillSection = () => {
    return (
        <section id='home-skills' className='skill-section'>
            <div className='angle-top'></div>
            <div className="skill-section-inner">
                <div className="skill-inner-wide">
                    <h2>skills</h2>
                    <p>I utilize HTML, CSS, JavaScript, SASS, React, and Tailwind CSS to create intuitive UI and seamless UX in my development work. Additionally, I work with PHP, Shopify, WooCommerce, and WordPress to build scalable and efficient web solutions.<br />
                        I believe in the harmony between design and development, and I strive to create engaging interfaces using Figma and Adobe XD. I also focus on optimizing user experience and continuously improving web environments to maximize performance.</p>
                    <h3>development</h3>
                    <p>HTML / CSS / JavaScript / SASS / React / Tailwind CSS / PHP /
                        Shopify / WooCommerce / WordPress</p>
                    <h3>design tools</h3>
                    <p>Figma / Adobe XD</p>
                </div>
            </div>
            <div className='angle-bottom'></div>
        </section>
    );
}

export default SkillSection;