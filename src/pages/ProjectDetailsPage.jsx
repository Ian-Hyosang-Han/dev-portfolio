import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/forms/ProjectDetails';
import projectsData from '../data/projectsData';

function ProjectDetailsPage() {
  const { projectId } = useParams();
  const projectData = projectsData[projectId];

  if (!projectData) {
    return (
      <div className="mx-20 my-20 text-center text-2xl">
        Project not found.
      </div>
    );
  }

  return (
    <main id="main-content">
      <ProjectDetails projectData={projectData} />
    </main>
  );
}

export default ProjectDetailsPage;