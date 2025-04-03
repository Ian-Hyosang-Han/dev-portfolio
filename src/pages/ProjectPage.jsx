import React from 'react';
import { useParams } from 'react-router-dom';
// Importing component
import ProjectDetails from '../components/forms/ProjectDetails';
// Importing projectData
import projectsData from '../data/projectsData';

function ProjectPage() {
    const { projectId } = useParams();
    const projectData = projectsData[projectId];

    if (!projectData) {
        return <div>Project not found</div>;
    }

    return <ProjectDetails projectData={projectData} />;
}

export default ProjectPage;