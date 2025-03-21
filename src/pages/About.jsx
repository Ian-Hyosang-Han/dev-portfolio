function About() {

    return (
        <div className="about-wrapper px-2.5 lg:px-10">
            <div className="about-title text-white">
                <h2 className="text-[2.5rem] mt-5 md:text-[3rem] lg:text-[4rem] xl:text-[4rem] lg:pt-5">about</h2>
                <p className="font-rajdhani font-bold text-[1.5rem] pb-5 md:text-4xl lg:text-5xl xl:text-6xl xl:pb-5 xl:pt-3" >The Essence of Who I am</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between" >
                <div
                    className="bg-cover bg-right bg-no-repeat text-transparent bg-clip-text flex-1 lg:order-2"
                    style={{
                        backgroundImage: "url('font-background.jpg')",
                        backgroundSize: "100%",
                        backgroundPosition: "right center"
                    }}
                >
                    <p className="tracking-wide impact-text uppercase text-[4.5rem] leading-[4rem] md:text-[10rem] md:leading-[10rem] lg:text-[9rem] lg:leading-[9rem] xl:text-[11rem] xl:leading-[10rem] font-bold text-right">
                        code<br />
                        devo<br />
                        build
                    </p>
                </div>
                <div className="about-content pb-5 text-base text-white md:text-xl flex-1 lg:text-[1.3rem] xl:text-[1.6rem] xl:pb-10" >
                    <p>I thrive on personal growth and exploration, which has led me to explore different jobs and experiences in search of what truly excites me. While my curiosity and desire for new challenges could be seen as restlessness, I've come to embrace them as part of who I am. Now, I'm focused on developing my skills, refining my work, and growing in a direction that feels meaningful. I believe persistence leads to meaningful results, and I approach challenges with a calm and positive mindset. Creativity, innovation, and collaboration are at the core of my approach, and I find joy in both the process and the small moments along the way. For me, success comes from continuous learning, effort, and a sense of humor to keep moving forward.</p>
                </div>
            </div>

            <div className="about-term">
                <p className="font-rajdhani text-[1.5rem] pb-1 font-bold md:text-[2.5rem]">A Term about “unspecialty”</p>
                <p className="text-base text-white mb-5 md:text-xl lg:text-[1.3rem] xl:text-[1.6rem]" >The word <strong>"Unspecialty"</strong> came to me during my time as a barista, while I was crafting coffee and beverages. At that time, it was important to meet people's expectations of a special drink or a specific taste. However, I realized that even without using particularly fancy beans or expensive ingredients, there was still plenty of specialness to be found in the process.
                    A cup of coffee, in its simplicity, offers a unique experience. By focusing on the small details and using basic ingredients and methods, I learned how to create something amazing from the ordinary. My portfolio reflects this same idea. Instead of relying on special tools or techniques, I aim to create unique results through fundamental principles and creative approaches. <strong>"Unspecialty"</strong> is about finding the extraordinary within the ordinary and uncovering the hidden value in what may seem mundane. </p>
                <div className="w-[95vw] h-1 bg-white mx-auto"></div>
            </div>
        </div>
    );
}

export default About;