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
        <div className="wrapper">
            <section className="intro-section">
                <div className="role">
                    <p className="front-end">front-end</p>
                    <p className="developer">Developer</p>
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ian-han-hyosang"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-1">
                        <FaLinkedin size={45} className='fill-white' />
                    </a>
                    <a href="https://github.com/Ian-Hyosang-Han"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-2">
                        <FaGithubSquare size={45} className='fill-white' />
                    </a>
                </div>

                <div className="greeting">
                    <h1>hello, ian han</h1>
                </div>
            </section>
            <TypingEffect />
            <AboutSection />
            <WorkSection />
            <SkillSection />
        </div>
    );
}

export default Home;