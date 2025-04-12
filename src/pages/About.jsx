import React from 'react';
// Importing component
import MilestoneTimeline from "../components/common/Milestone";

function About() {
    return (
        <>
            {/* ✅ Meta tags */}
            <title>About | Ian Han</title>
            <meta
                name="description"
                content="Learn more about Ian Han — a front-end developer who enjoys building thoughtful, user-friendly web experiences. Here's a bit about who I am and how I work."
            />
            <meta
                name="keywords"
                content="Ian Han, about Ian, front-end developer, web developer, developer bio, portfolio about page, who is Ian Han, meet the developer"
            />

            <main id="main-content" className="about-wrapper px-2.5 lg:px-10" aria-label="About page main content">
                <div className="about-title text-white mt-13 md:mt-20 lg:mt-23">
                    <h2 className="font-Montserrat font-bold text-[2.5rem] mt-5 md:text-[3rem] lg:text-[5rem]">
                        about</h2>
                    <p className="font-lato uppercase font-extrabold text-[1.5rem] pb-5 md:text-[2rem] lg:text-[3rem] xl:pb-5 xl:pt-3" >
                        The Essence of Who I am
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <MilestoneTimeline />

                    <article className="about-content pb-5 text-base md:text-xl flex-1 lg:text-[1.3rem] xl:text-[1.6rem] xl:pb-10">
                        <p>I see my journey as a series of <strong>leaps, limits,</strong> and <strong>learnings.</strong><br />
                            It all started into the machines — operating them, understanding how things work, and getting my hands dirty. That passion led me to <strong>junior hardware development,</strong> where I got my first real taste of tech creation. As I grew, I stepped into a senior role, learning more about building not just machines, but resilience.<br />
                            <strong>Then came the wall</strong> — moments of limitation, frustration, and the questions that come with them. So I leapt. I came <strong>to Canada</strong> in search of something more, and found myself learning a whole new craft as a mechanic millwright.<br />
                            But again, <strong>the limits came knocking.</strong> While working, I sustained an injury that put strain on my body — and it forced me to pause and reflect. <strong>That frustration became fuel.</strong> I realized that growth never ends — and that's when I truly stepped into challenge mode.<br />
                            I began learning <strong>front-end development</strong> — something I had been curious about even during my time as a hardware developer — combining creativity, logic, and storytelling into something <strong>I genuinely love.</strong><br />
                            Now, I <strong>embrace every challenge</strong> with a calm mindset, and treat curiosity not as restlessness, but as a compass. I believe meaningful work is built through persistence, imagination, and a touch of humor. And <strong>I am just getting started.</strong></p>

                        <div className="about-term" aria-label="Explanation of the concept Unspecialty">
                            <p className="font-lato text-[1.5rem] pb-1 font-extrabold md:text-[3rem] xl:mt-10">A Term about “unspecialty”</p>
                            <p className="text-base text-white mb-5 md:text-xl lg:text-[1.3rem] xl:text-[1.6rem]" >
                                The word <strong>"Unspecialty"</strong> came to me during my time as a barista, while I was crafting coffee and beverages. At that time, it was important to meet people's expectations of a special drink or a specific taste. However, I realized that even without using particularly fancy beans or expensive ingredients, there was still plenty of specialness to be found in the process.
                                A cup of coffee, in its simplicity, offers a unique experience. By focusing on the small details and using basic ingredients and methods, I learned how to create something amazing from the ordinary. My portfolio reflects this same idea. Instead of relying on special tools or techniques, I aim to create unique results through fundamental principles and creative approaches. <strong>"Unspecialty"</strong> is about finding the extraordinary within the ordinary and uncovering the hidden value in what may seem mundane.
                            </p>
                        </div>
                    </article>
                </div>

                <hr className="w-[95vw] h-1 bg-white mx-auto" />
            </main>
        </>
    );
}

export default About;