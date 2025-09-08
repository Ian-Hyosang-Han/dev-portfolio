const projectsData = {
  javascriptgame1: {
    title: "Astro Escape",
    subtitle: "JavaScript Game",
    category: "personal",
    description: "JavaScript Canvas game with real-time logic and collisions",
    imageUrls: ["/jg-image01.webp"],
    techStack: ["HTML", "CSS", "JavaScript", "Canvas"],
    overview:
      "This game effectively utilizes the Canvas API to create a real-time, avoidance-based game with player movement, collision detection, randomized meteor spawning, and a time-based scoring system.",
    roles: "Front-End Developer / UI-UX Designer",
    launchUrl: "https://hyosanghan.com/astro-escape",
    githubUrl: "https://github.com/Ian-Hyosang-Han/astro-escape",
    featured: [
      {
        title: "1. Canvas API Usage",
        details: [
          "Uses the canvas element to render 2D game graphics",
          'getContext("2d") enables drawing game characters and obstacles (meteors)',
        ],
      },
      {
        title: "2. Player (Spaceship) Movement",
        details: [
          "Player class manages movement with the move(keys) method",
          "Uses keydown and keyup event listeners to allow real-time control",
        ],
      },
      {
        title: "3. Unlimited Meteor Generation",
        details: [
          "he Meteor class and spawnMeteor() function continuously generate meteors",
          "setTimeout(spawnMeteor, 30) ensures a constant stream of meteors",
          "Meteor speed varies slightly based on difficulty (difficulty variable)",
        ],
      },
      {
        title: "4. Random Meteor Movement Direction",
        details: [
          "Uses Math.random() * Math.PI * 2 to make meteors move in random directions",
          "his.dx = Math.cos(angle) * this.speed; and this.dy = Math.sin(angle) * this.speed; create unpredictable movement patterns",
        ],
      },
      {
        title: "5. Collision Detection",
        details: [
          "The checkCollision(player, meteor) function uses AABB (Axis-Aligned Bounding Box) collision detection",
          "If the player collides with a meteor, the gameOver() function is triggered",
        ],
      },
      {
        title: "6. Scoring System (Time-based Score)",
        details: [
          "startTime is recorded using Date.now() to measure elapsed time",
          "scoreDisplay.innerText = Time: $elapsedTime updates the score in real-time",
        ],
      },
      {
        title: "7. Game Over Screen",
        details: [
          "When a collision occurs, gameOver() is called",
          'Final elapsed time is displayed (alert("Game Over! Final Time: X seconds"))',
          '"Play Again" and "Home" buttons appear, allowing players to restart',
        ],
      },
      {
        title: "8. Game Restart & Home Navigation",
        details: [
          "Clicking the restartButton resets and restarts the game (initGame())",
          "Clicking the homeButton returns to the start screen",
        ],
      },
    ],
    reflection: [
      {
        title: "1. Learning Experience & Challenges",
        details: [
          "Developing this game was a great opportunity to apply JavaScript fundamentals while working with the Canvas API.",
          "One of the biggest challenges was implementing real-time movement and collision detection smoothly.",
        ],
      },
      {
        title: "2. What Went Well",
        details: [
          "Randomized Meteor Motion - Instead of static falling objects, using Math.random() and trigonometry allowed for unpredictable movement, making the game more challenging.",
          "Game State Management - Using flags like gameRunning and properly handling UI elements (display: none/block) made transitions between start, game, and game-over screens smooth and intuitive.",
        ],
      },
      {
        title: "3. Areas for Improvement & Future Enhancements",
        details: [
          "Better Difficulty Scaling - The game could progressively increase meteor speed or spawn rate based on elapsed time to ramp up the challenge dynamically.",
          "Mobile Responsiveness - Implementing touch controls would allow mobile users to play without needing a keyboard.",
        ],
      },
      {
        title: "4. Key Takeaways",
        details: [
          "This project reinforced my understanding of game loops, object-oriented programming in JavaScript, and event-driven interactions.",
          "It also showed me the importance of balancing challenge and playability.",
          "While the game is simple, the experience of optimizing and improving it was incredibly valuable. Moving forward, I'm excited to explore more advanced game mechanics, physics simulations, and animations to enhance future projects.",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "Movie Database",
        imageUrl: "/md-image01.webp",
        url: "/project/moviedatabase",
      },
      {
        title: "Capstone",
        imageUrl: "/cp-image01.webp",
        url: "/project/capstone",
      },
    ],
  },

  javascriptgame2: {
    title: "whack-A-mole",
    subtitle: "JavaScript Game",
    category: "personal",
    description:
      "Retro-style whack-a-mole game built with JavaScript, featuring audio, animations, and time-based scoring.",
    imageUrls: ["/jg-image02.webp"],
    techStack: ["HTML", "CSS", "JavaScript", "Canvas"],
    overview:
      "This project recreates the classic Whack-A-Mole arcade game using the Canvas API and DOM manipulation. It includes interactive mole and bomb logic, audio control, a countdown-based start sequence, time-based game loop, and real-time scoring.",
    roles: "Front-End Developer / UI-UX Designer",
    launchUrl: "https://hyosanghan.com/whack-A-mole",
    githubUrl: "https://github.com/Ian-Hyosang-Han/JSGame-whack-A-mole",
    featured: [
      {
        title: "1. Interactive Start & Music Control",
        details: [
          "Players choose whether to play with music before starting the game.",
          "Music control is handled via `<audio>` and button listeners.",
        ],
      },
      {
        title: "2. Countdown-Based Game Start",
        details: [
          "A 3-second countdown timer is displayed before gameplay begins.",
          "Smooth transition between UI screens using `display: none/block`.",
        ],
      },
      {
        title: "3. Mole and Bomb Random Spawning",
        details: [
          "Random holes are chosen using `Math.random()`.",
          "Moles increase score, while bombs decrease score when clicked.",
        ],
      },
      {
        title: "4. Game Loop and Timer",
        details: [
          "Game runs on a 30-second timer (`setInterval`) with visual time display.",
          "Mole and bomb intervals managed separately for balanced pacing.",
        ],
      },
      {
        title: "5. Real-Time Score Tracking",
        details: [
          "Score is updated instantly on hitting a mole or bomb.",
          "`updateScore()` dynamically updates score display in UI.",
        ],
      },
      {
        title: "6. Endgame and Restart Flow",
        details: [
          "When the timer hits 0, game stops and displays final score.",
          '"Try Again" button allows users to reset and restart instantly.',
        ],
      },
      {
        title: "7. Neon Title and Animated Graphics",
        details: [
          "Uses CSS animation (`@keyframes`) to animate neon title and mole/bomb appearances.",
          "Visual feedback enhances retro arcade feel.",
        ],
      },
      {
        title: "8. Custom Visual Design with Illustrator & Photoshop",
        details: [
          "All game assets mole character, bomb icon, hole graphic, and background were custom-designed using Adobe Illustrator and Photoshop.",
          "These visuals were optimized for clarity, personality, and consistency with the arcade theme.",
        ],
      },
    ],
    reflection: [
      {
        title: "1. Learning Experience & Challenges",
        details: [
          "Building a game interface with multiple interactive components taught me to structure UI logic and game state management cleanly.",
          "The biggest challenge was balancing the timing of different elements (mole, bomb, timer, game over).",
        ],
      },
      {
        title: "2. What Went Well",
        details: [
          "Successfully implemented randomized hole selection with proper collision/overlap prevention.",
          "The countdown sequence and music integration added polish to the game start.",
        ],
      },
      {
        title: "3. Key Takeaways",
        details: [
          "Strengthened skills in DOM manipulation, CSS animations, and event-driven logic.",
          "Learned the importance of user experience when managing transitions between game states.",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "Pennywise",
        imageUrl: "/pw-image01.webp",
        url: "/project/pennywise",
      },
      {
        title: "Capstone",
        imageUrl: "/cp-image01.webp",
        url: "/project/capstone",
      },
    ],
  },

  moviedatabase: {
    title: "movella",
    subtitle: "movie database",
    category: "personal",
    description:
      "A sleek movie database app built with React and REST API integration",
    imageUrls: ["/md-image01.webp"],
    techStack: [
      "React",
      "React Router",
      "API integration(REST API)",
      "SASS(SCSS)",
    ],
    overview:
      "MOVELLA is a movie database application built with React and React Router. It allows users to browse movies, view details, and manage a favorites list. The app is designed with a responsive layout and smooth navigation for an engaging user experience",
    roles: "Front-End Developer / UI-UX designer",
    launchUrl: "https://hyosanghan.com/movella",
    githubUrl: "https://github.com/Ian-Hyosang-Han/movella-moviedatabase",
    featured: [
      {
        title: "1. Fetching Movie Categories",
        details: [
          "Each function dynamically constructs the API URL.",
          "API responses are handled safely with .then() and .catch() to manage errors.",
        ],
      },
      {
        title: "2. Page Routing (React Router)",
        details: [
          "Uses react-router-dom to create a Single Page Application (SPA) structure.",
          "AppRouter.js defines all routes for easy navigation.",
        ],
      },
      {
        title: "3. Global State Management",
        details: [
          "Uses GlobalContext to manage the Favorites feature.",
          "GlobalProvider wraps the entire app, allowing state access across components.",
        ],
      },
      {
        title: "4. Dynamic Favorites System",
        details: [
          "Users can add/remove movies from their Favorites list.",
          "Calls addFavorite() or removeFavorite() based on the movie status.",
          "isFavorite checks if a movie is already in favorites.",
        ],
      },
      {
        title: "5. Responsive Navigation Menu",
        details: [
          "Supports mobile-friendly navigation with a hamburger menu.",
          "Uses useState to toggle menu visibility.",
        ],
      },
      {
        title: "6. Movie Details Page",
        details: [
          "Uses dynamic routing (/movie/:id) to display individual movie details.",
          "Extracts the movie id from the URL using useParams().",
          "Fetches and displays movie-specific information (title, description, rating, etc.).",
        ],
      },
    ],
    reflection: [
      {
        title: "Achievements & Strengths",
        details: [
          "While working on the movie database project, I am proud of several aspects I successfully implemented. I structured the API integration efficiently, which made fetching movie data smooth and reliable. Using React Router allowed me to create seamless navigation between different pages, significantly improving the overall user experience. One of the features I particularly enjoyed implementing was the Favorites feature, as it added a personal touch and made the app more engaging for users. Managing API requests and state through GlobalContext helped me keep the code organized and scalable, which I found very satisfying. Additionally, I ensured the app maintained a clean and intuitive design, enhancing user interaction. These achievements boosted my confidence in building user-centric web applications and strengthened my skills in state management and API handling.",
        ],
      },
      {
        title: "Challenges & Areas for Improvement",
        details: [
          "Despite the successes, I faced several challenges during this project. I overlooked the need for loading indicators, which made the app feel unresponsive when fetching data, affecting the user experience. My error handling could also be improved; I did not display user-friendly messages when errors occurred, which might confuse users. Additionally, while the navigation menu worked, I felt I could have made it more visually refined to enhance usability further. Looking back, I realize the app would benefit from search and filtering options to make movie discovery more interactive and user-friendly. I also aim to implement better error handling with clearer messages to improve reliability. Incorporating animations and lazy loading would enhance performance and make the UI more appealing. These areas for improvement will guide me in building more robust and user-focused applications in the future.",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "JavaScript Game",
        imageUrl: "/jg-image02.webp",
        url: "/project/javascriptgame2",
      },
      {
        title: "Capstone",
        imageUrl: "/cp-image01.webp",
        url: "/project/capstone",
      },
    ],
  },

  capstone: {
    title: "Paws & Relax",
    subtitle: "Capstone Project",
    category: "team",
    description:
      "Custom WordPress site for pet massage bookings with WooCommerce and advanced scheduling features",
    imageUrls: ["/cp-image01.webp"],
    techStack: ["WordPress", "Woocommerce", "Custom Theme", "Gutenberg"],
    overview:
      "Paws & Relax is a fully functional WooCommerce-powered dog massage booking platform designed to provide a seamless experience for pet owners. Customers can browse services, select specialized therapists, and book appointments with real-time scheduling. The platform features a custom WordPress theme, CPTs, and custom blocks, enhancing flexibility and scalability. Automated email confirmations and reminders ensure smooth communication. Built by a team of four, this project showcases expertise in WordPress development, e-commerce functionality, and user experience design",
    roles: "WordPress Developer / UI-UX designer",
    launchUrl: "https://pawsandrelax.bcitwebdeveloper.ca/",
    githubUrl: "https://github.com/htpwebdesign/paws-relax-theme",
    featured: [
      {
        title: "1. Custom Branding",
        details: [
          "Conceptualized and designed the Paws & Relax brand, including its name, logo, and visual identity, ensuring a cohesive and engaging experience.",
        ],
      },
      {
        title: "2. Custom WordPress Theme Development",
        details: [
          "Designed and developed a fully custom WooCommerce theme with CPTs (Custom Post Types) and custom blocks, ensuring flexibility and maintainability.",
        ],
      },
      {
        title: "3. End-to-End Booking System",
        details: [
          "Implemented the WooCommerce Booking Plugin, allowing customers to schedule appointments in real-time and choose from different therapists based on their specialties and times.",
        ],
      },
      {
        title: "4. Specialized Therapist Profiles",
        details: [
          "Created individual therapist pages, each highlighting their unique skills and experience, helping pet owners make informed choices.",
        ],
      },
      {
        title: "5. WooCommerce & ACF Integration",
        details: [
          "Used WooCommerce Booking Plugin and Advanced Custom Fields (ACF) to enhance customization, making the platform dynamic and scalable.",
        ],
      },
      {
        title: "6. Secure Payment Processing",
        details: [
          "Integrated Stripe for smooth, secure online payments, offering customers a hassle-free checkout experience",
        ],
      },
      {
        title: "7. Mobile-Responsive Design",
        details: [
          "Ensured the entire platform is fully responsive, providing a seamless experience across desktop, tablet, and mobile devices.",
        ],
      },
      {
        title: "8. Scalable & Maintainable Architecture",
        details: [
          "Designed the platform for long-term growth, enabling effortless updates, new service integrations, and seamless business scalability.",
        ],
      },
    ],
    reflection: [
      {
        title:
          "Building Paws & Relax: A Real-World WooCommerce Experience in Team Collaboration",
        details: [
          "Developing Paws & Relax strengthened my ability to build custom WordPress solutions from scratch, integrating WooCommerce, booking functionality, and payment processing into a seamless user experience. Creating CPTs and custom blocks deepened my understanding of WordPress extensibility, while implementing Stripe payments and a shipping system expanded my e-commerce expertise. Our team of four worked exceptionally well together, holding daily stand-up meetings to align our tasks, communicate progress, and troubleshoot challenges—just like in a real-world project. We maintained a healthy work balance, ensuring that no one felt pressured by giving each other the flexibility to rest on weekends, which ultimately led to better productivity and a high-quality final product. Whenever we encountered complex issues, we scheduled meetings with our instructor, simulating a real client-consultation environment to refine our approach and improve our problem-solving skills.",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "Movie Database",
        imageUrl: "/md-image01.webp",
        url: "/project/moviedatabase",
      },
      {
        title: "JavaScript Game",
        imageUrl: "/jg-image01.webp",
        url: "/project/javascriptgame1",
      },
    ],
  },

  portfolio: {
    title: "Unspecialty",
    subtitle: "Portfolio Project",
    category: "personal",
    description:
      "Modern portfolio built with React and Tailwind CSS, focusing on clean UI and intuitive UX",
    imageUrls: ["/pf-image01.webp"],
    techStack: ["React", "React Router", "Tailwind CSS", "HTML & CSS", "Vite"],
    overview:
      "My design philosophy is about creating something extraordinary from the ordinary. I built this portfolio with a strong focus on clean layout, mobile- first design, and intuitive user experiences. As seen in the home banner—INTUITIVE UI, SEAMLESS UX, ENGAGING INTERFACES, OPTIMIZED PERFORMANCE, and CONTINUOUS GROWTH—these principles guided every design and development decision. It features a diverse collection of projects I have built or contributed to, and reflects not only my technical skills but also my professional journey, past experiences, and personal passions. At its core, this portfolio is more than just a showcase—it is a story about where I have been, what I have created, and the kind of developer and person I aspire to become.",
    roles: "Front-End Developer / UI-UX Designer",
    launchUrl: "/",
    githubUrl: "https://github.com/Ian-Hyosang-Han/dev-portfolio",
    featured: [
      {
        title: "1. Component-Driven Architecture",
        details: [
          "Built using React Router and reusable component structures to dynamically load project pages from a centralized projectData file.",
          "Eliminated the need for multiple hardcoded pages by designing a single dynamic route component that populates content based on project data.",
        ],
      },
      {
        title: "2. UI/UX Enhancements",
        details: [
          "Utilized React Icons for scalable, consistent visual cues across the site.",
          "Implemented advanced CSS animations and hover effects to create engaging interactions.",
          "Incorporated smooth transitions and micro-interactions to elevate the user experience.",
        ],
      },
      {
        title: "3. Styling Strategy",
        details: [
          "Applied Tailwind CSS selectively for rapid styling on simpler component and page.",
          "Organized style logic by separating global styles, UI styles, and form styles into clearly defined folders and files.",
          "Created a root-level style system with CSS variables to maintain design consistency.",
        ],
      },
      {
        title: "4. Performance Optimization",
        details: [
          "Optimized all images and rendering-sensitive assets for faster load times and smoother performance.",
          "Maintained a clean and modular codebase for readability and scalability.",
        ],
      },
    ],
    reflection: [
      {
        title: "Tailwind Integration",
        details: [
          "Realized the potential of using Tailwind CSS throughout the entire project to improve styling efficiency and maintainability.",
          "Plan to refactor future projects with full Tailwind adoption for more consistent design tokens and utility-driven workflow.",
        ],
      },
      {
        title: "Advanced Responsive Design",
        details: [
          "Gained a deeper understanding of responsive UI patterns and their impact on user experience.",
          "In future iterations, I aim to enhance responsiveness by leveraging more advanced CSS techniques such as container queries and fluid scaling strategies.",
        ],
      },
      {
        title: "Project Takeaways",
        details: [
          "This portfolio served as a sandbox to explore architectural decisions, styling systems, and animation techniques.",
          "I learned the value of balancing simplicity with scalability, and will continue refining how structure, aesthetics, and performance come together in my work.",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "JavaScript Game",
        imageUrl: "/jg-image01.webp",
        url: "/project/javascriptgame1",
      },
      {
        title: "Movie Database",
        imageUrl: "/md-image01.webp",
        url: "/project/moviedatabase",
      },
    ],
  },

  pennywise: {
    title: "Pennywise",
    subtitle: "Expense Management Web App",
    category: "personal",
    description:
      "A simple personal expense management web application built with React, TypeScript, Vite, Tailwind CSS, and Redux Toolkit, backed by a GitHub-hosted JSON server for development and deployed on Vercel for easy testing.",
    imageUrls: ["/pw-image01.webp"],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
    ],
    overview:
      "PennyWise provides users with an intuitive interface to log and manage daily expenses, visualize spending patterns via animated category-based charts, and track monthly and yearly totals.",
    roles: "Full-Stack Developer / UI-UX Designer",
    launchUrl: "https://pennywise-eight.vercel.app",
    githubUrl: "https://github.com/Ian-Hyosang-Han/pennywise",
    featured: [
      {
        title: "1. GitHub-hosted JSON Server Backend",
        details: [
          "Uses a public GitHub repo and My JSON Server to mock RESTful API endpoints",
          "No custom backend code required for CRUD operations",
        ],
      },
      {
        title: "2. React & Redux Toolkit Architecture",
        details: [
          "Global state managed with Redux Toolkit slices",
          "Data fetching and caching handled by React Query",
        ],
      },
      {
        title: "3. Expense CRUD Operations",
        details: [
          "Users can create, read, update, and delete expense entries",
          "Form validation ensures data integrity before submission",
        ],
      },
      {
        title: "4. Category-based Graph Visualization",
        details: [
          "Animated bar charts display expense distribution by category",
          "Smooth transitions when changing selected month",
        ],
      },
      {
        title: "5. Monthly & Yearly Aggregation",
        details: [
          "Summarizes total expenses for the selected month and the entire year",
          "Dynamic date filtering via a month picker",
        ],
      },
      {
        title: "6. Responsive Design",
        details: [
          "Desktop layout features a sidebar navigation",
          "Mobile layout uses a header with a collapsible menu",
        ],
      },
      {
        title: "7. Daily Motivational Quote",
        details: [
          "Fetches and displays a random motivational quote each day",
          "Quotes refresh on every dashboard load",
        ],
      },
      {
        title: "8. Session Persistence",
        details: [
          "Login with demo credentials and maintain session via localStorage",
          "Protects expense data by requiring authentication",
        ],
      },
    ],
    reflection: [
      {
        title: "1. Learning Experience & Challenges",
        details: [
          "Integrated My JSON Server with React Query and handled CORS issues",
          "Simulated authentication flow without a real backend",
        ],
      },
      {
        title: "2. What Went Well",
        details: [
          "Seamless use of Tailwind CSS for a cohesive, responsive UI",
          "Implemented smooth animations for data visualization",
        ],
      },
      {
        title: "3. Areas for Improvement & Future Enhancements",
        details: [
          "Replace mock backend with a real API and database",
          "Enhance accessibility with ARIA roles and keyboard support",
        ],
      },
      {
        title: "4. Key Takeaways",
        details: [
          "Gained experience with mock backends for rapid prototyping",
          "Deepened understanding of state management and data fetching in React",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "JavaScript Game",
        imageUrl: "/jg-image02.webp",
        url: "/project/javascriptgame2",
      },
      {
        title: "FindInn",
        imageUrl: "/fi-image01.webp",
        url: "/project/findinn",
      },
    ],
  },

  findinn: {
    title: "FindInn",
    subtitle: "Hotel booking App",
    category: "personal",
    description:
      "A full-stack hotel booking application built with React on the front-end and Node.js/Express on the back-end, featuring secure authentication, image hosting, payment processing, and email notifications.",
    imageUrls: ["/fi-image01.webp"],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Cloudinary",
      "Stripe",
      "Nodemailer",
      "Svix",
    ],
    overview:
      "FindInn allows users to browse available rooms, make bookings, and receive confirmations—all through a responsive, mobile-first interface. On the back end, it exposes a RESTful API for room data, booking management, and integrates with third-party services for auth, storage, payments, and notifications.",
    roles: "Full-Stack Developer",
    launchUrl: "https://findinn.vercel.app/",
    githubUrl: "https://github.com/Ian-Hyosang-Han/booking-app/tree/main",
    featured: [
      {
        title: "1. Secure Authentication",
        details: [
          "User sign-up/sign-in flows powered by Clerk for passwordless and OAuth authentication",
          "Role-based access control to protect booking endpoints",
        ],
      },
      {
        title: "2. Image Upload & Hosting",
        details: [
          "File upload handling with Multer on the server",
          "Cloudinary for optimized image storage, transformations, and delivery",
        ],
      },
      {
        title: "3. RESTful Backend",
        details: [
          "Express.js server with well-structured routes and middleware",
          "CORS, rate-limiting, and data validation using express-validator",
        ],
      },
      {
        title: "4. Database Integration",
        details: [
          "MongoDB Atlas cluster for scalable data storage",
          "Mongoose ODM for schema definitions and relations",
        ],
      },
      {
        title: "5. Payment Processing",
        details: [
          "Stripe integration for secure credit-card transactions",
          "Webhook handling via Svix to verify and process payment events",
        ],
      },
      {
        title: "6. Email Notifications",
        details: [
          "Nodemailer with SMTP Relay (Brevo) to send booking confirmations",
          "Custom templating for clear, branded emails",
        ],
      },
      {
        title: "7. Responsive UI",
        details: [
          "React front-end styled with Tailwind CSS",
          "Mobile-first approach ensuring smooth experience on all devices",
        ],
      },
      {
        title: "8. Infrastructure & Deployment",
        details: [
          "Environment variables managed via dotenv",
          "Deployed on a Node.js-friendly hosting platform",
        ],
      },
    ],
    reflection: [
      {
        title: "1. Key Learnings & Challenges",
        details: [
          "Implementing secure, passwordless authentication flows with Clerk",
          "Managing file uploads reliably with Multer and Cloudinary",
          "Designing and consuming a RESTful API architecture to connect front-end and back-end",
          "Modeling data schemas and queries effectively with MongoDB and Mongoose",
          "Integrating Stripe payments and handling webhooks for reliable transaction processing",
        ],
      },
      {
        title: "2. What Went Well",
        details: [
          "Seamless integration of third-party services (Clerk, Stripe, Cloudinary)",
          "Modular code structure separating concerns across front-end and back-end",
          "Stable and performant MongoDB connection with well-defined Mongoose schemas",
        ],
      },
      {
        title: "3. Areas for Improvement",
        details: [
          "Add lazy loading for images to improve performance",
          "Enhance form validation and error feedback on booking forms",
          "Refine and optimize full-stack business logic and error handling across all routes",
        ],
      },
      {
        title: "4. Future Enhancements",
        details: [
          "Introduce advanced search filters (location, price range, amenities)",
          "Build an availability calendar for real-time room booking checks",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "Astro Escape",
        imageUrl: "/jg-image01.webp",
        url: "/project/javascriptgame1",
      },
      {
        title: "Movella",
        imageUrl: "/md-image01.webp",
        url: "/project/moviedatabase",
      },
    ],
  },

  booking365: {
    title: "Booking365",
    subtitle: "Screen Golf Booking & Promo Site",
    category: "work",
    description:
      "A promotional and booking-focused website for a screen golf facility, built on WordPress with a fully custom theme and Gutenberg blocks. Designed to provide customers with clear information.",
    imageUrls: ["/bk-image01.webp"],
    techStack: ["WordPress", "Custom Theme", "Gutenberg"],
    overview:
      "Booking365 is a promotional website for a screen golf business, built to highlight services and attract new customers. The site emphasizes clear information, visually consistent branding, and mobile-friendly accessibility. Developed with a custom WordPress theme and Gutenberg editor, it offers flexibility for content updates and ensures a professional online presence.",
    roles: "WordPress Developer / UI-UX designer",
    launchUrl: "https://booking365.ca/",
    githubUrl: "https://github.com/Ian-Hyosang-Han/BOOKING365-CUSTOM-THEME",
    featured: [
      {
        title: "1. Custom Theme Development",
        details: [
          "Developed a bespoke WordPress theme tailored to the brand identity of Booking365.",
          "Ensured scalability and easy maintenance for future updates and business growth.",
        ],
      },
      {
        title: "2. Gutenberg Integration",
        details: [
          "Leveraged Gutenberg blocks to create reusable, modular content sections.",
          "Enabled non-technical staff to update content easily without coding knowledge.",
        ],
      },
      {
        title: "3. Responsive & User-Friendly Design",
        details: [
          "Implemented a mobile-first approach to guarantee usability across all devices.",
          "Emphasized clean layouts and intuitive UI for quick navigation.",
        ],
      },
      {
        title: "4. Performance & SEO",
        details: [
          "Optimized site performance through lightweight theme design.",
          "Improved discoverability by applying SEO best practices within WordPress.",
        ],
      },
    ],
    reflection: [
      {
        title: "1. Key Learnings",
        details: [
          "Learned how to translate the business concept into a consistent design language across the entire site.",
          "Gained experience in building a custom WordPress theme that matched the client's branding and vision.",
          "Ensured that the initial design concept was carried through seamlessly into the final product.",
        ],
      },
      {
        title: "2. What Went Well",
        details: [
          "Color scheme, typography, and layout were well-matched to the business identity, creating a cohesive brand presence.",
          "Effectively utilized plugins such as WP Migrate and WP Mail to streamline site management and communication.",
          "Developed Gutenberg blocks that made content updates flexible and easy for non-technical users.",
        ],
      },
      {
        title: "3. Areas for Improvement",
        details: [
          "Could further expand the customization of Gutenberg blocks for more unique layouts.",
          "Explore additional design refinements to enhance user engagement while maintaining simplicity.",
          "Improve optimization with better caching and image handling for even smoother performance.",
        ],
      },
      {
        title: "4. Future Enhancements",
        details: [
          "Add more dynamic pages or interactive elements to make the promotional aspects more engaging.",
          "Introduce additional plugins (e.g., multilingual support, advanced SEO tools) to broaden the site's reach.",
          "Continue refining visual hierarchy and design details to strengthen branding and user experience.",
        ],
      },
    ],
    relatedProjects: [
      {
        title: "Paws & Relax",
        imageUrl: "/cp-image01.webp",
        url: "/project/capstone",
      },
      {
        title: "Unspecialty (Portfolio)",
        imageUrl: "/pf-image01.webp",
        url: "/project/portfolio",
      },
    ],
  },
};

export default projectsData;

// : {
//   title: "",
//   subtitle: "",
//   category: "",
//   description:
//     "",
//   gifUrls: "",
//   imageUrls: ["/pw-image01.webp"],
//   techStack: ["", "", "",],
//   overview:
//     "",
//   roles: " / ",
//   launchUrl: "",
//   githubUrl: "",
//   featured: [
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//   ],
//   reflection: [
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//     {
//       title: "",
//       details: [
//         "",
//         "",
//       ],
//     },
//   ],
//   relatedProjects: [
//     {
//       title: "",
//       imageUrl: "",
//       url: "",
//     },
//     {
//       title: "",
//       imageUrl: "",
//       url: "",
//     },
//   ],
// },
