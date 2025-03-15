import React, { useEffect, useRef } from 'react';
// Importing CSS style file
import '../styles/pages/home.css';
// Importing Icons 
import linkedInIcon from '../media/linked-in-128.png';
import GithubIcon from '../components/common/GitHubIcon';

function Home() {
    const phrases = [
        'INTUITIVE UI',
        'SEAMLESS UX',
        'ENGAGING INTERFACES',
        'OPTIMIZED PERFORMANCE',
        'CONTINUOUS GROWTH'
    ];

    const typingRefs = useRef([]);

    useEffect(() => {
        typingRefs.current.forEach((ref, index) => {
            let j = 0;
            let currentPhrase = '';
            let speed = 150;

            const type = () => {
                if (j <= phrases[index].length) {
                    currentPhrase = phrases[index].substring(0, j);
                    j++;
                    ref.innerText = currentPhrase;
                    setTimeout(type, speed);
                }
            };
            type();
        });
    }, [phrases]);

    return (
        <div className="wrapper">
            <section className="intro-section">
                <div className="role">
                    <p className="front-end">Front-End</p>
                    <p>Developer</p>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ian-hyosang-han"
                       target="_blank"
                       rel="noopener noreferrer">
                    <img 
                        src={linkedInIcon}
                        alt="LinkedIn Icon"
                        className="icon-1" />
                    </a>
                    <a href="https://github.com/Ian-Hyosang-Han"
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="icon-2" >
                        <GithubIcon />
                    </a>
                </div>
                <div className="greeting">
                    <h1>hello, ian han</h1>
                </div>
                <div className="typing-container">
                    {phrases.map((phrase, index) => (
                        <div key={index} className="typing-effect" ref={(el) => (typingRefs.current[index] = el)}></div>
                    ))}
                </div>
            </section>
            <section id='home-about' className='about-section'>
                <div className='angle-top'></div>
                <div className="section-inner">
                    <div className="inner-wide">
                        <h2>about</h2>
                        <p><strong>Driven by limitless ideas and imagination.</strong> I will be a developer who constantly strives  for endless development and problem-solving. With the skills I have learned, I will maintain an attitude of continuous growth by staying updated with the latest trends ans tools</p>
                        <p><strong>If you're not making mistakes, you're not doing anything.</strong> I believe that challenging moments are inevitable for everyone. However, the ultimate  purpose of these challenges is to learn and <strong>grow from the experience.</strong> By approaching even the smallest problems with patience and resilience, fostering communication with those around me, and turning each experience into an opportunity for personal growth, I strive to maintain a healthy work-life balance while continually progressing in my journey.</p>
                    </div>
                </div>
                <div className='angle-bottom'></div>
            </section>

            <section id='home-works' className='works-section'>
                <div className="work work01">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <h2>astro escape</h2>
                        <p>javascript-game</p>
                    </div>
                </div>

                <div className="work work02">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <h2>movella</h2>
                        <p>movie database</p>
                    </div>
                </div>

                <div className="work work03">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <h2>capstone</h2>
                        <p>capstone project</p>
                    </div>
                </div>

                <div className="work work04">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <h2>design</h2>
                        <p>figma/adobe xd</p>
                    </div>
                </div>

                <div className="work-inner">
                    <div className="work-inner-wide">
                        <h2>works</h2>
                    </div>
                </div>
            </section>

            <section id='home-skills' className='skill-section'>
                <div className='angle-top'></div>
                <div className="section-inner">
                    <div className="inner-wide">
                        <h2>skills</h2>
                        <h3>development</h3>
                        <p>HTML / CSS / JAVASCRIPT / SASS / REACT / PHP /
                            Shopify / woocommerce / wordPress</p>
                        <h3>design tools</h3>
                        <p>Figma / Adobe XD</p>
                    </div>
                </div>
                <div className='angle-bottom'></div>
            </section>

        </div>
    );
}

export default Home;