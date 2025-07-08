import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ProjectDetails from '../components/forms/ProjectDetails';
import projectsData from '../data/projectsData';

function ProjectPage() {

    const [selectedCategory, setSelectedCategory] = useState('personal');

    const filteredProjects = Object.entries(projectsData).filter(
        ([, project]) => project.category === selectedCategory
    );

    // if (!projectData) {
    //     return <div>Project not found</div>;
    // }

    return (
        <>
            {/* ✅ Meta tags */}
            {/* <meta
                name="description"
                content={`Explore "${projectData.title}" — a front-end project where I focused on ${projectData.technologies.toLowerCase()}. Learn more about the goals, features, and what I discovered along the way.`}
            />
            <meta
                name="keywords"
                content={`Ian Han, ${projectData.title}, ${projectData.technologies}, front-end project, web development, React, portfolio project, developer showcase`}
            /> */}

            <main className='mx-20'>
                <div className='flex items-end  mt-5 mb-10 gap-6'>
                    <h2 className='text-[5rem] font-bold mt-20' >MY PROJECT</h2>
                    <img className='w-[100px] h-auto relative -translate-y-2.5' src="/main_hat.webp" alt="hat" />
                </div>

                <p className='text-2xl mb-10'>A collection of web application projects developed using <strong>JavaScript, React, WordPress, TypeScript and Next.js</strong> - including <strong>full-stack implemnetations with backend logic and database intergration.</strong></p>

                <div className='text-2xl flex mb-10 border-t-2 border-b-2 px-4'>
                    {['personal', 'team', 'work'].map((category, index) => (
                        <label key={category} className={`flex justify-between items-center w-1/3 px-4 py-2 cursor-pointer ${index < 2 ? 'border-r-2 border-white' : ''}`}>
                            <span className='uppercase'>{category}</span>
                            <input
                                type="radio"
                                name="tap"
                                value={category}
                                checked={selectedCategory === category}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-5 h-5 appearance-none border border-white rounded-sm checked:bg-white"
                            />
                        </label>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 mb-20">
                    {filteredProjects.map(([key, project]) => (
                        <div key={key} className="p-6 rounded-xl shadow-md">
                            <img src={project.imageUrls?.[0]} alt={project.title} className="rounded-md mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <a href={`/project/${key}`} className="hover:underline">View Project →</a>
                        </div>
                    ))}
                </div>
                
                {/* <div className='text-2xl flex mb-10 border-t-2 border-b-2 px-4'>
                    <label className='flex justify-between items-center w-1/3 px-4 py-2 border-r-2 border-white'>
                        <span>PERSONAL</span>
                        <input className="w-5 h-5 appearance-none border border-white rounded-sm checked:bg-white cursor-pointer"
                            type="radio" name='tap' id='personal' checked />
                    </label>
                    <label className='flex justify-between items-center w-1/3 px-4 border-r-2 border-white'>
                        <span>TEAM</span>
                        <input className="w-5 h-5 appearance-none border border-white rounded-sm checked:bg-white cursor-pointer"
                            type="radio" name='tap' id='personal' checked />
                    </label>
                    <label className='flex justify-between items-center w-1/3 px-4 '>
                        <span>WORK</span>
                        <input className="w-5 h-5 appearance-none border border-white rounded-sm checked:bg-white cursor-pointer"
                            type="radio" name='tap' id='personal' checked />
                    </label>
                </div> */}
                {/* <div className='font-Montserrat text-2xl flex gap-5 mb-5'>
                    <button>JavaScript</button>
                    <button>React</button>
                    <button>WordPress</button>
                    <button>Next.js</button>
                </div> */}
                {/* <ProjectDetails projectData={projectData} /> */}
            </main>
        </>
    );
}

export default ProjectPage;