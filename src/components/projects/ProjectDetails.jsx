import React, { useState } from 'react';
import ShowingBox from '../common/ShowingBox';
import LaunchButton from '../common/LaunchButton';
import GitHubIcon from '../common/GitHubIcon';
import '../../styles/components/project.css';

function ProjectDetails({ projectData }) {
    const [activePanel, setActivePanel] = useState('left');

    const togglePanel = (panel) => {
        if (activePanel !== panel) {
            setActivePanel(panel);
        }
    };

    return (
        <div className="project-page">
            <ShowingBox />
            <div className="base-tt"></div>
            <div className="link-to">
                <LaunchButton url={projectData.launchUrl} />
                <GitHubIcon url={projectData.githubUrl} />
            </div>
            <div className="project-content">
                <h2>{projectData.title}</h2>
                <h3>{projectData.subtitle}</h3>
                <h4>{projectData.technologies}</h4>
                <p><strong>Project-overview:</strong> {projectData.overview}</p>
                <p><strong>Role(s):</strong> {projectData.roles}</p>
                <h5>Inside of the project</h5>
            </div>
            <div className="accordion-box">
                <div className="accordion-buttons">
                    <button className={`accordion-button ${activePanel === 'left' ? 'active' : ''}`} onClick={() => togglePanel('left')}>Featured</button>
                    <button className={`accordion-button ${activePanel === 'right' ? 'active' : ''}`} onClick={() => togglePanel('right')}>Reflection</button>
                </div>
                <div className="accordion-content">
                    <div className="panel" style={{ display: activePanel === 'left' ? 'block' : 'none' }}>
                        {projectData.featured.map((item, index) => (
                            <div key={index}>
                                <p>{item.title}</p>
                                <ul>
                                    {item.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="panel" style={{ display: activePanel === 'right' ? 'block' : 'none' }}>
                        {projectData.reflection.map((item, index) => (
                            <div key={index}>
                                <p>{item.title}</p>
                                <ul>
                                    {item.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='showing-box'>
                    {projectData.relatedProjects.map((relatedProject, index) => (
                        <div key={index} className="visible-box">
                            <ShowingBox imageUrl={relatedProject.imageUrl} title={relatedProject.title} />
                        </div>
                    ))}
                    <div className="w-[300px] h-1 bg-white mx-auto "></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;