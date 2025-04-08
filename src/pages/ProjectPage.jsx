import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/forms/ProjectDetails';
import projectsData from '../data/projectsData';

function ProjectPage() {
    const { projectId } = useParams();
    const projectData = projectsData[projectId];

    useEffect(() => {
        if (projectData?.title) {
            document.title = `${projectData.title} | Ian Han`;
        }
    }, [projectData]);

    if (!projectData) {
        return <div>Project not found</div>;
    }

    return (
        <>
            {/* ✅ Meta tags */}
            <meta
                name="description"
                content={`Explore "${projectData.title}" — a front-end project where I focused on ${projectData.technologies.toLowerCase()}. Learn more about the goals, features, and what I discovered along the way.`}
            />
            <meta
                name="keywords"
                content={`Ian Han, ${projectData.title}, ${projectData.technologies}, front-end project, web development, React, portfolio project, developer showcase`}
            />

            <ProjectDetails projectData={projectData} />
        </>
    );
}

export default ProjectPage;