import React, { useEffect, useRef } from 'react';
// Importing CSS style file
import '../styles/home.css';
// Importing Icons 
import linkedInIcon from '../media/linked-in-128.png';
import githubIcon from '../media/github-96.png';

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
            <section className="intro">
                <div className="role">
                    <p className="front-end">Front-End</p>
                    <p>Developer</p>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ian-hyosang-han" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src={linkedInIcon} 
                             alt="LinkedIn Icon" 
                             className="icon-1" />
                    </a>
                    <a href="https://github.com/Ian-Hyosang-Han" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <img src={githubIcon} 
                             alt="GitHub Icon" 
                             className="icon-2" />
                    </a>
                </div>
                <div className="greeting">
                    <h1>Hello, Ian Han</h1>
                </div>
                <div className="typing-container">
                    {phrases.map((phrase, index) => (
                        <div key={index} className="typing-effect" ref={(el) => (typingRefs.current[index] = el)}></div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;