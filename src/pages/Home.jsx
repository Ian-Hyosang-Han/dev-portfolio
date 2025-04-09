import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import TypingEffect from '../components/common/TypingEffect';
import AboutSection from '../components/common/AboutSection';
import SkillSection from '../components/common/SkillSection';
import WorkSection from '../components/common/WorkSection';
import '../styles/pages/home.css';

function Home() {
    return (
        <>
            {/* ✅ Meta tags */}
            <title>Ian Han | Front-End Developer Portfolio</title>
            <meta 
                name="description" 
                content="Welcome to my corner of the internet! I am Ian Han — a front-end developer who builds things that look good and actually work. Check out what I have been working on!" 
            />
            <meta 
                name="keywords" 
                content="Ian Han, front-end developer, web developer, portfolio, creative coding, UI developer, React projects, personal site, developer portfolio, design-focused dev" 
            />

            <main id="main-content" className="home-wrapper">
                <section className="intro-section">
                    <div className="role">
                        <p className="front-end">Front-End</p>
                        <p className="developer">Developer</p>
                    </div>
                    <div className="social-icons">
                        <a 
                            href="https://www.linkedin.com/in/ian-han-hyosang"
                            aria-label="Visit Ian Han's Linkedin profile"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon--linkedin"
                        >
                            <FaLinkedin size={45} className='fill-white' />
                        </a>
                        <a 
                            href="https://github.com/Ian-Hyosang-Han"
                            aria-label="Visit Ian Han's GitHub profile"
                            target="_blank"
                            rel="noreferrer"
                            className="social-icon--github"
                        >
                            <FaGithubSquare size={45} className='fill-white' />
                        </a>
                    </div>

                    <h1 id="greeting" className="greeting">Hi! I AM IAN, HAN</h1>
                </section>

                <TypingEffect />
                <AboutSection />
                <WorkSection />
                <SkillSection />
            </main>
        </>
    );
}

export default Home;