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

            <div className="about-wrapper px-2.5 lg:px-10">
                <div className="about-title text-white mt-13 md:mt-20 lg:mt-23">
                    <h2 className="font-Montserrat font-bold text-[2.5rem] mt-5 md:text-[3rem] lg:text-[4rem]">
                        about</h2>
                    <p className="font-rajdhani uppercase font-bold text-[1.5rem] pb-5 md:text-4xl lg:text-5xl xl:text-6xl xl:pb-5 xl:pt-3" >The Essence of Who I am</p>
                </div>
                <div className="flex flex-col lg:flex-row justify-between" >

                    <MilestoneTimeline />

                    <div
                        className="bg-cover bg-right bg-no-repeat text-transparent bg-clip-text flex-1 lg:order-2 lg:hidden"
                        style={{
                            backgroundImage: "url('font-background.png')",
                            backgroundPosition: "right center"
                        }}
                    >
                        <p className="tracking-wide impact-text uppercase text-[4.5rem] leading-[4rem] md:text-[10rem] md:leading-[10rem] lg:text-[9rem] lg:leading-[9rem] xl:text-[11rem] xl:leading-[10rem] font-bold text-right">
                            code<br />
                            devo<br />
                            build
                        </p>
                    </div>
                    
                    <article className="about-content pb-5 text-base md:text-xl flex-1 lg:text-[1.3rem] xl:text-[1.6rem] xl:pb-10" >
                        <p>I see my journey as a series of leaps, limits, and learnings.<br />
                            It all started into the machines — operating them, understanding how things work, and getting my hands dirty. That passion led me to junior hardware development, where I got my first real taste of tech creation. As I grew, I stepped into a senior role, learning more about building not just machines, but resilience.<br />
                            Then came the wall — moments of limitation, frustration, and the questions that come with them. So I leapt. I came to Canada in search of something more, and found myself learning a whole new craft as a mechanic millwright.<br />
                            But again, the limits came knocking. While working, I sustained an injury that put strain on my body — and it forced me to pause and reflect. That frustration became fuel. I realized that growth never ends — and that's when I truly stepped into challenge mode.<br />
                            I began learning front-end development — something I had been curious about even during my time as a hardware developer — combining creativity, logic, and storytelling into something I genuinely love.<br />
                            Now, I embrace every challenge with a calm mindset, and treat curiosity not as restlessness, but as a compass. I believe meaningful work is built through persistence, imagination, and a touch of humor. And I am just getting started.</p>
                        <div className="about-term">
                            <p className="font-rajdhani text-[1.5rem] pb-1 font-bold md:text-[2.5rem] xl:mt-10">A Term about “unspecialty”</p>
                            <p className="text-base text-white mb-5 md:text-xl lg:text-[1.3rem] xl:text-[1.6rem]" >The word <strong>"Unspecialty"</strong> came to me during my time as a barista, while I was crafting coffee and beverages. At that time, it was important to meet people's expectations of a special drink or a specific taste. However, I realized that even without using particularly fancy beans or expensive ingredients, there was still plenty of specialness to be found in the process.
                                A cup of coffee, in its simplicity, offers a unique experience. By focusing on the small details and using basic ingredients and methods, I learned how to create something amazing from the ordinary. My portfolio reflects this same idea. Instead of relying on special tools or techniques, I aim to create unique results through fundamental principles and creative approaches. <strong>"Unspecialty"</strong> is about finding the extraordinary within the ordinary and uncovering the hidden value in what may seem mundane. </p>
                        </div>
                    </article>
                </div>
                <hr className="w-[95vw] h-1 bg-white mx-auto"></hr>
            </div>
        </>
    );
}

export default About;