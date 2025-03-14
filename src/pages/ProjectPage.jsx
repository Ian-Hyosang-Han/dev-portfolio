import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/projects/ProjectDetails';
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