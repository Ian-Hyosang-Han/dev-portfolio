import React from 'react';

const SkillSection = () => {
    return (
        <section
            id="home-skills"
            className="relative w-full mb-4 text-gray-700 leading-snug"
        >
            {/* Top Angle Shape */}
            <div
                className="absolute w-full h-[1.875rem] top-[-29px]
                     bg-[url('/angle_top_mobile.png')] bg-bottom bg-no-repeat bg-cover z-10
                     lg:bg-[url('/angle_top.png')]"
            />

            {/* Inner White Box */}
            <div className="relative w-full bg-white py-4">
                <div className="px-2 lg:px-6 xl:px-12">
                    {/* Section Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-[3rem] font-extrabold mb-4">
                        Skills
                    </h2>

                    {/* Summary Paragraph */}
                    <p className="mt-1 ml-2 md:text-[26px] leading-relaxed">
                        I build end-to-end web experiences using a hybrid of modern
                        front-end and back-end technologies. On the front end, I leverage
                        <strong> HTML5, CSS3 (SASS), JavaScript (ES6+), React,</strong> and
                        <strong> Tailwind CSS</strong>. On the back end, I develop
                        <strong> RESTful APIs</strong> with
                        <strong> Node.js, Express</strong>, and
                        <strong> MongoDB</strong>. I also architect and deploy
                        <strong> C# &amp; .NET Core</strong> services on
                        <strong> Azure</strong> with databases managed via
                        <strong> SSMS</strong>. Additionally, I integrate platforms like
                        <strong> PHP-based WordPress, WooCommerce,</strong> and use
                        <strong> TypeScript, Serverless, CI/CD</strong> for scalable, maintainable
                        code.
                    </p>

                    {/* Development Subsection */}
                    <div className="relative flex items-start mt-6 mb-2">
                        <span className="absolute left-0 top-0 h-full w-1 bg-[#FF5F40]" />
                        <h3 className="pl-3 text-xl md:text-2xl uppercase font-bold">
                            Development
                        </h3>
                    </div>
                    <p className="mt-1 ml-2 md:text-[23px]">
                        HTML5 / CSS3 (SASS) / JavaScript (ES6+) / React / Tailwind
                        CSS / Node.js / Express / MongoDB / REST API / TypeScript / WordPress / C# / .NET Core /
                        Azure / SSMS
                    </p>

                    {/* Design Tools Subsection */}
                    <div className="relative flex items-start mt-6 mb-2">
                        <span className="absolute left-0 top-0 h-full w-1 bg-[#FF5F40]" />
                        <h3 className="pl-3 text-xl md:text-2xl uppercase font-bold">
                            Visual Toolchain
                        </h3>
                    </div>
                    <p className="mt-1 ml-2 md:text-[23px]">
                        Figma / Adobe XD / CI/CD (GitHub Actions) / Performance Optimization
                    </p>
                </div>
            </div>

            {/* Bottom Angle Shape */}
            <div
                className="absolute w-full h-[1.875rem] bottom-[-29px]
                     bg-[url('/angle_bottom_mobile.png')] bg-top bg-no-repeat bg-cover z-10
                     lg:bg-[url('/angle_bottom.png')]"
            />
        </section>
    );
};

export default SkillSection;