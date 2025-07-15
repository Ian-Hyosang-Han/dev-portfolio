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
                    <ProjectButton label="JavaScript" url="/project" />
                    <p>Dynamic web experiences with vanilla JS</p>
                </div>
            </div>

            <div className="work work02">
                <div className="work-cover"></div>
                <div className="work-text">
                    <ProjectButton label="React" url="/project" />
                    <p>React to the Max: UIs, APIs & Full-Stack</p>
                </div>
            </div>

            <div className="work work03">
                <div className="work-cover"></div>
                <div className="work-text">
                    <ProjectButton label="WordPress" url="/project" />
                    <p>Custom themes, Plugin and Effortless content</p>
                </div>
            </div>

            <div className="work work04">
                <div className="work-cover"></div>
                <div className="work-text">
                    <ProjectButton label="Other Tech" url="/project" />
                    <p>Various Programming Languages</p>
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
