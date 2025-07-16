import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ProjectDetails from '../components/forms/ProjectDetails';
import projectsData from '../data/projectsData';

function ProjectPage() {

    const [selectedCategory, setSelectedCategory] = useState('personal');
    const [selectedTech, setSelectedTech]         = useState('all');

    const categories = ['personal', 'team', 'work'];
    const techStack  = ['JavaScript', 'React', 'TypeScript', 'WordPress'];

    // Filter projects by selected category
    const categoryFiltered = Object.entries(projectsData).filter(
        ([, proj]) => proj.category === selectedCategory
    );

    // Filter projects by selected tech stack
    const techStackFiltered = categoryFiltered.filter(
        ([, proj]) =>
            selectedTech === 'all' || proj.techStack?.includes(selectedTech)
    );

    // Reset tech filter when category changes
    useEffect(() => {
        setSelectedTech('all');
    }, [selectedCategory]);

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

            <main className='flex px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mx-auto'>
                <div className='flex items-end  mt-13 mb-3 gap-4 sm:gap-6 md:gap-8 md:mt-18'>
                    <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] leading-tight' >MY PROJECT</h2>
                    <img 
                        src="/main_hat.webp" 
                        alt="hat" 
                        className='w-12 sm:w-16 md:w-18 lg:w-[100px] h-auto relative -translate-y-1 sm:-translate-y-2 md:-translate-y-2.5' />
                </div>

                <p className='text-base sm:text-lg md:text-xl lg:text-2xl mb-5'>A collection of web application projects developed using <strong>JavaScript, React, WordPress, TypeScript, C# and .NET Core</strong> - including <strong>full-stack implemnetations with backend logic and database integration.</strong></p>

                {/* Category selection (primary filter) */}
                <div className='text-xl md:text-2xl flex flex-col md:flex-row my-5 md:my-10 border-t-2 border-b-2 px-4'>
                    {categories.map((cat, idx) => (
                        <label 
                            key={cat}
                            className={`flex justify-between items-center w-full md:w-1/3 px-4 py-2 cursor-pointer 
                            ${idx < categories.length - 1 ? 'md:border-r-2 border-white' : ''}`}>
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

                {/* Tech stack filter (secondary filter) */}
                <div className='mb-5'>
                    <h3 className='text-2xl md:text-5xl font-bold mb-4 relative pl-4'>
                        <span className='absolute left-0 top-0 h-[30px] md:h-[42px] w-[5px] bg-[var(--navi-bg-color)]'></span>Tech Stack</h3>
                    <div className='font-Montserrat text-xl flex flex-wrap md:flex-nowrap md:text-2xl gap-0 md:gap-5 md:mt-5 md:mb-10'>
                        <button
                            onClick={() => setSelectedTech('all')}
                            className={`px-2 py-2 border rounded-full transition ${selectedTech === 'all' ? 'bg-white text-black' : 'bg-transparent text-white border-white'
                                }`}
                        >
                            All
                        </button>
                        {techStack.map((tech) => (
                            <button
                                key-={tech}
                                onClick={() => setSelectedTech(tech)}
                                className={`px-4 py-2 transition cursor-pointer ${selectedTech === tech ? 'font-bold' : 'font-light'
                                    }`}>
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-10">
                    {techStackFiltered.map(([key, proj]) => (
                        <div key={key}>
                            <div className="w-full aspect-[16/9] overflow-hidden rounded-md mb-3">
                                <img
                                    src={proj.imageUrls?.[0]}
                                    alt={proj.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                            <p className="mb-4">{proj.description}</p>
                            <Link to={`/project/${key}`} className="text-2xl font-bold text-white hover:text-[#FF5F40] transition-colors duration-200">
                                View Project →
                            </Link>
                        </div>
                    ))}
                    {techStackFiltered.length === 0 && (
                        <p className='text-xl text-gray-400 col-span-full'>No projects found for this flter</p>
                    )}
                </div>

                <hr className="h-1 bg-white mx-auto"></hr>
            </main>
        </>
    );
}

export default ProjectPage;