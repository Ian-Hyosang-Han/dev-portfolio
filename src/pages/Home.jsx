import { Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
// Importing CSS style file
import '../styles/pages/home.css';
// Importing Icons 
import { FaLinkedin } from "react-icons/fa6";
import GithubIcon from '../components/common/GitHubIcon';
import ProjectButton from '../components/common/ProjectButton';

function Home() {
    const phrases = [
        'INTUITIVE UI',
        'SEAMLESS UX',
        'ENGAGING INTERFACES',
        'OPTIMIZED PERFORMANCE',
        'CONTINUOUS GROWTH'
    ];

    const typingRefs = useRef([]);
    const gifRef = useRef(null);

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
        <div className="wrapper">
            <section className="intro-section">
                <div className="role">
                    <p className="front-end">front-end</p>
                    <p className="developer">developer</p>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ian-hyosang-han"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-1">
                        <FaLinkedin size={45} className='fill-white' />
                    </a>

                    <GithubIcon
                        className="icon-2"
                        url="https://github.com/Ian-Hyosang-Han"
                    />
                </div>
                <div className="float-image">
                    <img src="/main_notebook.webp" alt="notebook" />
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

            <section id='home-works' className='works-section'>
                <div className="work work01">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <ProjectButton label="astro escape" url="/project/javascriptgame" />
                        <p>javascript-game</p>
                    </div>
                </div>

                <div className="work work02">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <ProjectButton label="movella" url="/project/moviedatabase" />
                        <p>movie database</p>
                    </div>
                </div>

                <div className="work work03">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <ProjectButton label="capstone" url="/" />
                        <p>capstone project</p>
                    </div>
                </div>

                <div className="work work04">
                    <div className="work-cover"></div>
                    <div className="work-text">
                        <ProjectButton label="design" url="/" />
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
                <div className="skill-section-inner">
                    <div className="skill-inner-wide">
                        <h2>skills</h2>
                        <p>I utilize HTML, CSS, JavaScript, SASS, React, and Tailwind CSS to create intuitive UI and seamless UX in my development work. Additionally, I work with PHP, Shopify, WooCommerce, and WordPress to build scalable and efficient web solutions.<br />
                            I believe in the harmony between design and development, and I strive to create engaging interfaces using Figma and Adobe XD. I also focus on optimizing user experience and continuously improving web environments to maximize performance.</p>
                        <h3>development</h3>
                        <p>HTML / CSS / JAVASCRIPT / SASS / REACT / TAILWIND CSS / PHP /
                            SHOPIFY / WOOCOMMERCE / WORDPRESS</p>
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