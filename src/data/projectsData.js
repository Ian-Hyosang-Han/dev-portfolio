const projectsData = {
    javascriptgame: {
        title: 'Astro Escape',
        subtitle: 'JavaScript Game',
        imageUrls: ['/jg-image01.webp', '/jg-image02.webp'],
        technologies: 'HTML / CSS / JavaScript / Github',
        overview: 'This game effectively utilizes the Canvas API to create a real-time, avoidance-based game with player movement, collision detection, randomized meteor spawning, and a time-based scoring system.',
        roles: 'Front-End Developer / Designer',
        launchUrl: 'https://hyosanghan.com/astro-escape',
        githubUrl: 'https://github.com/Ian-Hyosang-Han/astro-escape',
        featured: [
            {
                title: '1. Canvas API Usage',
                details: [
                    'Uses the canvas element to render 2D game graphics',
                    'getContext("2d") enables drawing game characters and obstacles (meteors)'
                ]
            },
            {
                title: '2. Player (Spaceship) Movement',
                details: [
                    'Player class manages movement with the move(keys) method',
                    'Uses keydown and keyup event listeners to allow real-time control'
                ]
            },
            {
                title: '3. Unlimited Meteor Generation',
                details: [
                    'he Meteor class and spawnMeteor() function continuously generate meteors',
                    'setTimeout(spawnMeteor, 30) ensures a constant stream of meteors',
                    'Meteor speed varies slightly based on difficulty (difficulty variable)'
                ]
            },
            {
                title: '4. Random Meteor Movement Direction',
                details: [
                    'Uses Math.random() * Math.PI * 2 to make meteors move in random directions',
                    'his.dx = Math.cos(angle) * this.speed; and this.dy = Math.sin(angle) * this.speed; create unpredictable movement patterns'
                ]
            },
            {
                title: '5. Collision Detection',
                details: [
                    'The checkCollision(player, meteor) function uses AABB (Axis-Aligned Bounding Box) collision detection',
                    'If the player collides with a meteor, the gameOver() function is triggered'
                ]
            },
            {
                title: '6. Scoring System (Time-based Score)',
                details: [
                    'startTime is recorded using Date.now() to measure elapsed time',
                    'scoreDisplay.innerText = Time: $elapsedTime updates the score in real-time'
                ]
            },
            {
                title: '7. Game Over Screen',
                details: [
                    'When a collision occurs, gameOver() is called',
                    'Final elapsed time is displayed (alert("Game Over! Final Time: X seconds"))',
                    '"Play Again" and "Home" buttons appear, allowing players to restart'
                ]
            },
            {
                title: '8. Game Restart & Home Navigation',
                details: [
                    'Clicking the restartButton resets and restarts the game (initGame())',
                    'Clicking the homeButton returns to the start screen'
                ]
            },
        ],
        reflection: [
            {
                title: '1. Learning Experience & Challenges',
                details: [
                    'Developing this game was a great opportunity to apply JavaScript fundamentals while working with the Canvas API.',
                    'One of the biggest challenges was implementing real-time movement and collision detection smoothly.'
                ]
            },
            {
                title: '2. What Went Well',
                details: [
                    'Randomized Meteor Motion - Instead of static falling objects, using Math.random() and trigonometry allowed for unpredictable movement, making the game more challenging.',
                    'Game State Management - Using flags like gameRunning and properly handling UI elements (display: none/block) made transitions between start, game, and game-over screens smooth and intuitive.'
                ]
            },
            {
                title: '3. Areas for Improvement & Future Enhancements',
                details: [
                    'Better Difficulty Scaling - The game could progressively increase meteor speed or spawn rate based on elapsed time to ramp up the challenge dynamically.',
                    'Mobile Responsiveness - Implementing touch controls would allow mobile users to play without needing a keyboard.'
                ]
            },
            {
                title: '4. Key Takeaways',
                details: [
                    'This project reinforced my understanding of game loops, object-oriented programming in JavaScript, and event-driven interactions.',
                    'It also showed me the importance of balancing challenge and playability.',
                    'While the game is simple, the experience of optimizing and improving it was incredibly valuable. Moving forward, I\'m excited to explore more advanced game mechanics, physics simulations, and animations to enhance future projects.'
                ]
            },
        ],
        relatedProjects: [
            {
                title: 'Movie Database',
                imageUrl: '/md-image01.webp',
                url: '/project/moviedatabase'
            },
            {
                title: 'Capstone',
                imageUrl: '/cp-image01.webp',
                url: '/project/capstone'
            }
        ]
    },

    moviedatabase: {
        title: 'movella',
        subtitle: 'movie database',
        imageUrls: ['/md-image01.webp', '/md-image02.webp'],
        technologies: 'React / SASS / Github',
        overview: 'MOVELLA is a movie database application built with React and React Router. It allows users to browse movies, view details, and manage a favorites list. The app is designed with a responsive layout and smooth navigation for an engaging user experience',
        roles: 'UX/UI designer / Developer',
        launchUrl: 'https://hyosanghan.com/movella',
        githubUrl: 'https://github.com/Ian-Hyosang-Han/movella-moviedatabase',
        featured: [
            {
                title: '1. Fetching Movie Categories',
                details: [
                    'Each function dynamically constructs the API URL.',
                    'API responses are handled safely with .then() and .catch() to manage errors.'
                ]
            },
            {
                title: '2. Page Routing (React Router)',
                details: [
                    'Uses react-router-dom to create a Single Page Application (SPA) structure.',
                    'AppRouter.js defines all routes for easy navigation.'
                ]
            },
            {
                title: '3. Global State Management',
                details: [
                    'Uses GlobalContext to manage the Favorites feature.',
                    'GlobalProvider wraps the entire app, allowing state access across components.'
                ]
            },
            {
                title: '4. Dynamic Favorites System',
                details: [
                    'Users can add/remove movies from their Favorites list.',
                    'Calls addFavorite() or removeFavorite() based on the movie status.',
                    'isFavorite checks if a movie is already in favorites.'
                ]
            },
            {
                title: '5. Responsive Navigation Menu',
                details: [
                    'Supports mobile-friendly navigation with a hamburger menu.',
                    'Uses useState to toggle menu visibility.'
                ]
            },
            {
                title: '6. Movie Details Page',
                details: [
                    'Uses dynamic routing (/movie/:id) to display individual movie details.',
                    'Extracts the movie id from the URL using useParams().',
                    'Fetches and displays movie-specific information (title, description, rating, etc.).'
                ]
            },
        ],
        reflection: [
            {
                title: 'Achievements & Strengths',
                details: [
                    'While working on the movie database project, I am proud of several aspects I successfully implemented. I structured the API integration efficiently, which made fetching movie data smooth and reliable. Using React Router allowed me to create seamless navigation between different pages, significantly improving the overall user experience. One of the features I particularly enjoyed implementing was the Favorites feature, as it added a personal touch and made the app more engaging for users. Managing API requests and state through GlobalContext helped me keep the code organized and scalable, which I found very satisfying. Additionally, I ensured the app maintained a clean and intuitive design, enhancing user interaction. These achievements boosted my confidence in building user-centric web applications and strengthened my skills in state management and API handling.'
                ]
            },
            {
                title: 'Challenges & Areas for Improvement',
                details: [
                    'Despite the successes, I faced several challenges during this project. I overlooked the need for loading indicators, which made the app feel unresponsive when fetching data, affecting the user experience. My error handling could also be improved; I did not display user-friendly messages when errors occurred, which might confuse users. Additionally, while the navigation menu worked, I felt I could have made it more visually refined to enhance usability further. Looking back, I realize the app would benefit from search and filtering options to make movie discovery more interactive and user-friendly. I also aim to implement better error handling with clearer messages to improve reliability. Incorporating animations and lazy loading would enhance performance and make the UI more appealing. These areas for improvement will guide me in building more robust and user-focused applications in the future.'
                ]
            },
        ],
        relatedProjects: [
            {
                title: 'JavaScript Game',
                imageUrl: '/jg-image01.webp',
                url: '/project/javascriptgame'
            },
            {
                title: 'Capstone',
                imageUrl: '/cp-image01.webp',
                url: '/project/capstone'
            }
        ]
    },

    capstone: {
        title: 'Paws & Relax',
        subtitle: 'Capstone Project',
        imageUrls: ['/cp-image01.webp', '/cp-image02.webp'],
        technologies: 'WordPress / Woocommerce / Github',
        overview: 'Paws & Relax is a fully functional WooCommerce-powered dog massage booking platform designed to provide a seamless experience for pet owners. Customers can browse services, select specialized therapists, and book appointments with real-time scheduling. The platform features a custom WordPress theme, CPTs, and custom blocks, enhancing flexibility and scalability. Automated email confirmations and reminders ensure smooth communication. Built by a team of four, this project showcases expertise in WordPress development, e-commerce functionality, and user experience design',
        roles: 'WordPress Developer',
        launchUrl: 'https://pawsandrelax.bcitwebdeveloper.ca/',
        githubUrl: 'https://github.com/htpwebdesign/paws-relax-theme',
        featured: [
            {
                title: '1. Custom Branding',
                details: [
                    'Conceptualized and designed the Paws & Relax brand, including its name, logo, and visual identity, ensuring a cohesive and engaging experience.'
                ]
            },
            {
                title: '2. Custom WordPress Theme Development',
                details: [
                    'Designed and developed a fully custom WooCommerce theme with CPTs (Custom Post Types) and custom blocks, ensuring flexibility and maintainability.'
                ]
            },
            {
                title: '3. End-to-End Booking System',
                details: [
                    'Implemented the WooCommerce Booking Plugin, allowing customers to schedule appointments in real-time and choose from different therapists based on their specialties and times.'
                ]
            },
            {
                title: '4. Specialized Therapist Profiles',
                details: [
                    'Created individual therapist pages, each highlighting their unique skills and experience, helping pet owners make informed choices.'
                ]
            },
            {
                title: '5. WooCommerce & ACF Integration',
                details: [
                    'Used WooCommerce Booking Plugin and Advanced Custom Fields (ACF) to enhance customization, making the platform dynamic and scalable.'
                ]
            },
            {
                title: '6. Secure Payment Processing',
                details: [
                    'Integrated Stripe for smooth, secure online payments, offering customers a hassle-free checkout experience'
                ]
            },
            {
                title: '7. Mobile-Responsive Design',
                details: [
                    'Ensured the entire platform is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices.'
                ]
            },
            {
                title: '8. Scalable & Maintainable Architecture',
                details: [
                    'Designed the platform for long-term growth, enabling effortless updates, new service integrations, and seamless business scalability.'
                ]
            },
        ],
        reflection: [
            {
                title: 'Building Paws & Relax: A Real-World WooCommerce Experience in Team Collaboration',
                details: [
                    'Developing Paws & Relax strengthened my ability to build custom WordPress solutions from scratch, integrating WooCommerce, booking functionality, and payment processing into a seamless user experience. Creating CPTs and custom blocks deepened my understanding of WordPress extensibility, while implementing Stripe payments and a shipping system expanded my e-commerce expertise. Our team of four worked exceptionally well together, holding daily stand-up meetings to align our tasks, communicate progress, and troubleshoot challenges—just like in a real-world project. We maintained a healthy work balance, ensuring that no one felt pressured by giving each other the flexibility to rest on weekends, which ultimately led to better productivity and a high-quality final product. Whenever we encountered complex issues, we scheduled meetings with our instructor, simulating a real client-consultation environment to refine our approach and improve our problem-solving skills.'
                ]
            },
        ],
        relatedProjects: [
            {
                title: 'Movie Database',
                imageUrl: '/md-image01.webp',
                url: '/project/moviedatabase'
            },
            {
                title: 'JavaScript Game',
                imageUrl: '/jg-image01.webp',
                url: '/project/javascriptgame'
            }
        ]
    },

    portfolio: {
        title: 'Unspecialty',
        subtitle: 'Portfolio Project',
        imageUrls: ['/pf-image01.webp', '/pf-image02.webp'],
        technologies: 'React / CSS / Tailwind CSS / Github',
        overview: 'My design philosophy is about creating something extraordinary from the ordinary. I built this portfolio with a strong focus on clean layout, mobile- first design, and intuitive user experiences. As seen in the home banner—INTUITIVE UI, SEAMLESS UX, ENGAGING INTERFACES, OPTIMIZED PERFORMANCE, and CONTINUOUS GROWTH—these principles guided every design and development decision. It features a diverse collection of projects I have built or contributed to, and reflects not only my technical skills but also my professional journey, past experiences, and personal passions. At its core, this portfolio is more than just a showcase—it is a story about where I have been, what I have created, and the kind of developer and person I aspire to become.',
        roles: 'Front-End Developer / Designer',
        launchUrl: '/',
        githubUrl: 'https://github.com/Ian-Hyosang-Han/dev-portfolio',
        featured: [
            {
                title: '1. Component-Driven Architecture',
                details: [
                    'Built using React Router and reusable component structures to dynamically load project pages from a centralized projectData file.',
                    'Eliminated the need for multiple hardcoded pages by designing a single dynamic route component that populates content based on project data.'
                ]
            },
            {
                title: '2. UI/UX Enhancements',
                details: [
                    'Utilized React Icons for scalable, consistent visual cues across the site.',
                    'Implemented advanced CSS animations and hover effects to create engaging interactions.',
                    'Incorporated smooth transitions and micro-interactions to elevate the user experience.'
                ]
            },
            {
                title: '3. Styling Strategy',
                details: [
                    'Applied Tailwind CSS selectively for rapid styling on simpler component and page.',
                    'Organized style logic by separating global styles, UI styles, and form styles into clearly defined folders and files.',
                    'Created a root-level style system with CSS variables to maintain design consistency.'
                ]
            },
            {
                title: '4. Performance Optimization',
                details: [
                    'Optimized all images and rendering-sensitive assets for faster load times and smoother performance.',
                    'Maintained a clean and modular codebase for readability and scalability.'
                ]
            },
        ],
        reflection: [
            {
                title: 'Tailwind Integration',
                details: [
                    'Realized the potential of using Tailwind CSS throughout the entire project to improve styling efficiency and maintainability.',
                    'Plan to refactor future projects with full Tailwind adoption for more consistent design tokens and utility-driven workflow.'
                ]
            },
            {
                title: 'Advanced Responsive Design',
                details: [
                    'Gained a deeper understanding of responsive UI patterns and their impact on user experience.',
                    'In future iterations, I aim to enhance responsiveness by leveraging more advanced CSS techniques such as container queries and fluid scaling strategies.'
                ]
            },
            {
                title: 'Project Takeaways',
                details: [
                    'This portfolio served as a sandbox to explore architectural decisions, styling systems, and animation techniques.',
                    'I learned the value of balancing simplicity with scalability, and will continue refining how structure, aesthetics, and performance come together in my work.'
                ]
            }
        ],
        relatedProjects: [
            {
                title: 'JavaScript Game',
                imageUrl: '/jg-image01.webp',
                url: '/project/javascriptgame'

            },
            {
                title: 'Movie Database',
                imageUrl: '/md-image01.webp',
                url: '/project/moviedatabase'
            }
        ]
    },

}

export default projectsData;