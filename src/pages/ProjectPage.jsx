import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import ProjectDetails from '../components/forms/ProjectDetails';
import projectsData from '../data/projectsData';

function ProjectPage() {

    const [selectedCategory, setSelectedCategory] = useState('personal');
    const categories = ['personal', 'team', 'work'];

    const filtered = Object.entries(projectsData).filter(
        ([, proj]) => proj.category === selectedCategory
    );

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

            <main className='flex mx-20'>
                <div className='flex items-end  mt-5 mb-10 gap-6'>
                    <h2 className='text-[5rem] font-bold mt-20' >MY PROJECT</h2>
                    <img className='w-[100px] h-auto relative -translate-y-2.5' src="/main_hat.webp" alt="hat" />
                </div>

                <p className='text-2xl mb-10'>A collection of web application projects developed using <strong>JavaScript, React, WordPress, TypeScript and Next.js</strong> - including <strong>full-stack implemnetations with backend logic and database intergration.</strong></p>

                <div className='text-2xl flex mb-10 border-t-2 border-b-2 px-4'>
                    {categories.map((cat, idx) => (
                        <label key={cat} className={`flex justify-between items-center w-1/3 px-4 py-2 cursor-pointer ${idx < 2 ? 'border-r-2 border-white' : ''}`}>
                            <span className='uppercase'>{cat}</span>
                            <input
                                type="radio"
                                name="tap"
                                value={cat}
                                checked={selectedCategory === cat}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-5 h-5 appearance-none border border-white rounded-sm checked:bg-white"
                            />
                        </label>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 mb-20">
                    {filtered.map(([key, proj]) => (
                        <div key={key} className="rounded-xl shadow-md">
                            <img src={proj.imageUrls?.[0]} alt={proj.title} className="rounded-md mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                            <p className="mb-4">{proj.description}</p>
                            <Link to={`/project/${key}`} className="text-blue-600 hover:underline">
                                View Project →
                            </Link>
                        </div>
                    ))}
                </div>

                {/* <div className='font-Montserrat text-2xl flex gap-5 mb-5'>
                    <button>JavaScript</button>
                    <button>React</button>
                    <button>WordPress</button>
                    <button>Next.js</button>
                </div> */}
                {/* <ProjectDetails projectData={projectData} /> */}
                <hr className="h-1 bg-white mx-auto"></hr>
            </main>
        </>
    );
}

export default ProjectPage;