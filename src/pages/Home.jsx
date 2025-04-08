import React from 'react';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
// Importing components
import TypingEffect from '../components/common/TypingEffect';
import AboutSection from '../components/common/AboutSection';
import SkillSection from '../components/common/SkillSection';
import WorkSection from '../components/common/WorkSection';
// Importing CSS style
import '../styles/pages/home.css';

function Home() {
    return (
        <div className="home-wrapper">
            {/* Hero Section */}
            <section className="intro-section">
                <div className="role">
                    <p className="front-end">Front-End</p>
                    <p className="developer">Developer</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ian-han-hyosang"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon--linkedin">
                        <FaLinkedin size={45} className='fill-white' />
                    </a>
                    <a href="https://github.com/Ian-Hyosang-Han"
                        target="_blank"
                        rel="noreferrer"
                        className="social-icon--github">
                        <FaGithubSquare size={45} className='fill-white' />
                    </a>
                </div>

                <h1 id="greeting" className="greeting">Hi! I AM IAN, HAN</h1>
            </section>

            {/* Main Sections */}
            <TypingEffect />
            <AboutSection />
            <WorkSection />
            <SkillSection />
        </div>
    );
}

export default Home;