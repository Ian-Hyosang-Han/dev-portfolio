function About() {

    return (
        <div className="about-wrapper px-2.5">
            <div className="about-title text-white px-2.5">
                <h2 className="text-4xl mt-5 md:text-5xl pt-5 lg:text-[4rem]">about</h2>
                <p className="font-rajdhani font-bold text-2xl md:text-5xl pt-3 pb-5" >The Essence of Who I am</p>
            </div>
            {/* <div className="text-image">
                <p className="impact-text text-white uppercase text-8xl text-right px-2.5 py-5 leading-20 md:text-9xl md:leading-28" >
                    code<br />
                    dev<br />
                    build
                </p>
            </div> */}
            <div className="flex flex-col lg:flex-row justify-between" >
                <div
                    className="bg-cover bg-right bg-no-repeat text-transparent bg-clip-text flex-1 lg:order-2"
                    style={{
                        backgroundImage: "url('src/media/font-background-1.png')",
                        backgroundSize: "100%",
                        backgroundPosition: "right center"
                    }}
                >
                    <p className="tracking-normal impact-text uppercase text-[5rem] leading-17 md:text-10xl font-bold text-right md:text-[11rem] md:leading-38 lg:text-[12rem] lg:leading-43">
                        code<br />
                        devo<br />
                        build
                    </p>
                </div>
                <div className="about-content text-base text-white md:text-xl flex-1 lg:text-xl" >
                    <p>I thrive on personal growth and exploration, which has led me to explore different jobs and experiences in search of what truly excites me. While my curiosity and desire for new challenges could be seen as restlessness, I've come to embrace them as part of who I am. Now, I'm focused on developing my skills, refining my work, and growing in a direction that feels meaningful. I believe persistence leads to meaningful results, and I approach challenges with a calm and positive mindset. Creativity, innovation, and collaboration are at the core of my approach, and I find joy in both the process and the small moments along the way. For me, success comes from continuous learning, effort, and a sense of humor to keep moving forward.</p>
                </div>
            </div>

            <div className="about-term">
                <p className="font-rajdhani text-2xl px-2.5 pt-7 pb-1 font-bold">A Term about “unspecialty”</p>
                <p className="text-base px-2.5 text-white mb-5 md:text-xl" >The word <strong>"Unspecialty"</strong> came to me during my time as a barista, while I was crafting coffee and beverages. At that time, it was important to meet people's expectations of a special drink or a specific taste. However, I realized that even without using particularly fancy beans or expensive ingredients, there was still plenty of specialness to be found in the process.
                    A cup of coffee, in its simplicity, offers a unique experience. By focusing on the small details and using basic ingredients and methods, I learned how to create something amazing from the ordinary. My portfolio reflects this same idea. Instead of relying on special tools or techniques, I aim to create unique results through fundamental principles and creative approaches. <strong>"Unspecialty"</strong> is about finding the extraordinary within the ordinary and uncovering the hidden value in what may seem mundane. </p>
                <div className="w-[300px] h-1 bg-white mx-auto md:w-[700px]"></div>
            </div>
        </div>
    );
}

export default About;