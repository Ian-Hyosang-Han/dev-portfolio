const projectsData = {
    javascriptgame: {
        title: 'Astro Escape',
        subtitle: 'JavaScript Game',
        technologies: 'HTML / CSS / JavaScript',
        overview: 'This game effectively utilizes the Canvas API to create a real-time, avoidance-based game with player movement, collision detection, randomized meteor spawning, and a time-based scoring system.',
        roles: 'UX/UI designer / Developer',
        launchUrl: 'https://example.com',
        githubUrl: 'https://github.com/Ian-Hyosang-Han/Astro-escape',
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
                imageUrl: '/src/media/md-background.png' 
             },
            { 
                title: 'Capstone',
                imageUrl: '/src/media/wallhaven.png' 
            }
        ]
    },

    moviedatabase: {
        title: 'movella',
        subtitle: 'movie database',
        technologies: 'REACT.js / CSS',
        overview: 'MOVELLA is a movie database application built with React and React Router. It allows users to browse movies, view details, and manage a favorites list. The app is designed with a responsive layout and smooth navigation for an engaging user experience',
        roles: 'UX/UI designer / Developer',
        launchUrl: 'https://example.com',
        githubUrl: 'https://github.com/Ian-Hyosang-Han/movella',
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
                title: '1. Achievements & Strengths',
                details: [
                    'While working on the movie database project, I am proud of several aspects I successfully implemented. I structured the API integration efficiently, which made fetching movie data smooth and reliable. Using React Router allowed me to create seamless navigation between different pages, significantly improving the overall user experience. One of the features I particularly enjoyed implementing was the Favorites feature, as it added a personal touch and made the app more engaging for users. Managing API requests and state through GlobalContext helped me keep the code organized and scalable, which I found very satisfying. Additionally, I ensured the app maintained a clean and intuitive design, enhancing user interaction. These achievements boosted my confidence in building user-centric web applications and strengthened my skills in state management and API handling.'
                ]
            },
            {
                title: '2. Challenges & Areas for Improvement',
                details: [
                    'Despite the successes, I faced several challenges during this project. I overlooked the need for loading indicators, which made the app feel unresponsive when fetching data, affecting the user experience. My error handling could also be improved; I did not display user-friendly messages when errors occurred, which might confuse users. Additionally, while the navigation menu worked, I felt I could have made it more visually refined to enhance usability further. Looking back, I realize the app would benefit from search and filtering options to make movie discovery more interactive and user-friendly. I also aim to implement better error handling with clearer messages to improve reliability. Incorporating animations and lazy loading would enhance performance and make the UI more appealing. These areas for improvement will guide me in building more robust and user-focused applications in the future.'
                ]
            },
        ],
        relatedProjects: [
            { 
                title: 'Movie Database',
                imageUrl: '/src/media/md-background.png' 
             },
            { 
                title: 'Capstone',
                imageUrl: '/src/media/wallhaven.png' 
            }
        ]
    },
};

export default projectsData;