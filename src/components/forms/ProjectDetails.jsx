import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare } from 'react-icons/fa';
// Importing UI
import LaunchButton from '../ui/LaunchButton';
// Importing CSS style
import '../../styles/pages/project.css';

function ProjectDetails({ projectData }) {
    const [activePanel, setActivePanel] = useState('left');

    const togglePanel = (panel) => {
        if (activePanel !== panel) {
            setActivePanel(panel);
        }
    };

    return (
        <div className="project-wrapper">
            <div className="project-page">
                <div className="project-header">
                    <h2>{projectData.title}</h2>
                    <h3>{projectData.subtitle}</h3>
                    <h4>{projectData.technologies}</h4>
                </div>

                <div className="project-content">
                    <p><strong>Project-overview:</strong> {projectData.overview}</p>
                    <p><strong>Role(s):</strong> {projectData.roles}</p>
                </div>

                <div className="external-links">
                    <div className="link-to">
                        <LaunchButton url={projectData.launchUrl} />
                        <a href={projectData.githubUrl}
                            target="_blank"
                            rel="noreferrer">
                            <FaGithubSquare size={45} className='fill-white' />
                        </a>
                    </div>
                </div>

                <div className="project-images">
                    {projectData.imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`${projectData.title}-image-${index}`} className="project-header-image" />
                    ))}
                </div>

            </div>
            <div className="accordion-container">
                <div className="accordion-box">
                    <h2>Inside of the project</h2>
                    <div className="accordion-buttons">
                        <button
                            className={`accordion-button ${activePanel === 'left' ? 'active' : ''}`}
                            onClick={() => togglePanel('left')}
                            aria-expanded={activePanel === 'left'}
                            aria-controls="panel-featured"
                            aria-selected={activePanel === 'left'}
                            role="tab"
                            id="tab-featured"
                        >Featured</button>
                        <button
                            className={`accordion-button ${activePanel === 'right' ? 'active' : ''}`}
                            onClick={() => togglePanel('right')}
                            aria-expanded={activePanel === 'left'}
                            aria-controls="panel-featured"
                            aria-selected={activePanel === 'left'}
                            role="tab"
                            id="tab-featured"
                        >Reflection</button>
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
                </div>

                <section className="showing-container">
                    <div className="showing-box-header">
                        <h2>Explore additional projects</h2>
                    </div>
                    <div className='showing-box'>
                        {projectData.relatedProjects.map((relatedProject, index) => (
                            <Link
                                key={index}
                                to={relatedProject.url}
                                className="related-project-card"
                            >
                                <img
                                    src={relatedProject.imageUrl}
                                    alt={relatedProject.title}
                                    className="project-image"
                                />
                                <div className="card-content">
                                    <h2>{relatedProject.title}</h2>
                                    <p>You are about to enter this content.<br /> Click when you're ready! 🚀</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
                <hr className="w-[95vw] h-1 bg-white mx-auto"></hr>
            </div>
        </div>
    );
}

export default ProjectDetails;