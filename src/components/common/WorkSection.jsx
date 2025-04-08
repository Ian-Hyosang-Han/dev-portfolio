import React from 'react'
// Importing UI
import ProjectButton from '../ui/ProjectButton';
// Importing CSS style
import '../../styles/components/worksection.css';

const WorkSection = () => {
    return (
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
                    <ProjectButton label="capstone" url="/project/capstone" />
                    <p>capstone project</p>
                </div>
            </div>

            <div className="work work04">
                <div className="work-cover"></div>
                <div className="work-text">
                    <ProjectButton label="design" url="/" />
                    <p>coming soon!</p>
                </div>
            </div>

            <div className="work-inner">
                <div className="work-inner-wide">
                    <h2>work</h2>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;
