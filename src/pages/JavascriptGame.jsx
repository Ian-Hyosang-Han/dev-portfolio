import { useState } from 'react';
import '../styles/javascriptgame.css';
import githubIcon from '../media/github-96.png';

function JavascriptGame() {

    // State to manage accordion panels
    const [activePanel, setActivePanel] = useState('left');

    // Function to toggle accordion panel
    const togglePanel = (panel) => {
        if (activePanel !== panel) {
            setActivePanel(panel);
        }
    };

    return (
        <div className="javascriptgame-wrapper">
            <div className="showing-box">
                <div className="base-top"></div>
                <div className="base-left"></div>
                <div className="base-right"></div>
                <div className="base-bot"></div>
                <div className="base-tt"></div>
            </div>
            <div className="link-to">
                <a href="https://example.com">
                    <button class="custom-btn02"><span>GO!</span><span>launch</span></button>
                </a>
                <a href="https://github.com/Ian-Hyosang-Han/Astro-escape"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={githubIcon}
                        alt="GitHub Icon"
                        className="github-icon" />
                </a>
            </div>
            <div className="project-content">
                <h2>astro escape</h2>
                <h3>javascript-game</h3>
                <h4>html / css / javascript</h4>
                <p><strong>Project-overview:</strong> This game effectively utilizes the Canvas API to create a real-time, avoidance-based game with player movement, collision detection, randomized meteor spawning, and a time-based scoring system.
                    It also features dynamic difficulty adjustment, responsive UI elements, and efficient memory management, making it a well-structured and expandable game.</p>
                <p><strong>Role(s):</strong> UX/UI designer / Developer</p>
                <h5>insode of the project</h5>
            </div>
            <div className="accordion-box">
                <div className="accordion-buttons">
                    <button className={`accordion-button ${activePanel === 'left' ? 'active' : ''}`} onClick={() => togglePanel('left')}>Featured</button>
                    <button className={`accordion-button ${activePanel === 'right' ? 'active' : ''}`} onClick={() => togglePanel('right')}>Reflection</button>
                </div>
                <div className="accordion-content">
                    <div className="panel" style={{ display: activePanel === 'left' ? 'block' : 'none' }}>
                        <ol>
                            <li>
                                <p>Canvas API Usage</p>
                                <ul>
                                    <li>Uses the canvas element to render 2D game graphics</li>
                                    <li>getContext("2d") enables drawing game characters and obstacles (meteors)</li>
                                </ul>
                            </li>
                            <li>
                                <p>Player (Spaceship) Movement</p>
                                <ul>
                                    <li>Player class manages movement with the move(keys) method</li>
                                    <li>Uses keydown and keyup event listeners to allow real-time control</li>
                                </ul>
                            </li>
                            <li>
                                <p>Unlimited Meteor Generation</p>
                                <ul>
                                    <li>The Meteor class and spawnMeteor() function continuously generate meteors</li>
                                    <li>setTimeout(spawnMeteor, 30) ensures a constant stream of meteors</li>
                                    <li>Meteor speed varies slightly based on difficulty (difficulty variable)</li>
                                </ul>
                            </li>
                            <li>
                                <p>Random Meteor Movement Direction</p>
                                <ul>
                                    <li>Uses Math.random() * Math.PI * 2 to make meteors move in random directions</li>
                                    <li>this.dx = Math.cos(angle) * this.speed; and this.dy = Math.sin(angle) * this.speed; create unpredictable movement patterns</li>
                                </ul>
                            </li>
                            <li>
                                <p>Collision Detection</p>
                                <ul>
                                    <li>The checkCollision(player, meteor) function uses AABB (Axis-Aligned Bounding Box) collision detection</li>
                                    <li>If the player collides with a meteor, the gameOver() function is triggered</li>
                                </ul>
                            </li>
                            <li>
                                <p>Scoring System (Time-based Score)</p>
                                <ul>
                                    <li>startTime is recorded using Date.now() to measure elapsed time</li>
                                    <li>scoreDisplay.innerText = Time: $elapsedTime updates the score in real-time</li>
                                </ul>
                            </li>
                            <li>
                                <p>Game Over Screen</p>
                                <ul>
                                    <li>When a collision occurs, gameOver() is called</li>
                                    <li>Final elapsed time is displayed (alert("Game Over! Final Time: X seconds"))</li>
                                    <li>"Play Again" and "Home" buttons appear, allowing players to restart</li>
                                </ul>
                            </li>
                            <li>
                                <p>Game Restart & Home Navigation</p>
                                <ul>
                                    <li>Clicking the restartButton resets and restarts the game (initGame())</li>
                                    <li>Clicking the homeButton returns to the start screen</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className="panel" style={{ display: activePanel === 'right' ? 'block' : 'none' }}>
                        <p>Reflection content goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JavascriptGame;