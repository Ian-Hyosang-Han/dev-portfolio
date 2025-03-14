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
    },
};

export default projectsData;