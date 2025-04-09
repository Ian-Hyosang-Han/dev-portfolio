import React, { useEffect, useRef } from 'react';
// Importing CSS style
import '../../styles/components/typingeffect.css';

const TypingEffect = () => {
    const phrases = [
        'INTUITIVE UI',
        'SEAMLESS UX',
        'ENGAGING INTERFACES',
        'OPTIMIZED PERFORMANCE',
        'CONTINUOUS GROWTH'
    ];

    const typingRefs = useRef([]);

    useEffect(() => {
        typingRefs.current.forEach((ref, index) => {
            let j = 0;
            let currentPhrase = '';
            let speed = 150;

            const type = () => {
                if (j <= phrases[index].length) {
                    currentPhrase = phrases[index].substring(0, j);
                    j++;
                    ref.innerText = currentPhrase;
                    setTimeout(type, speed);
                }
            };
            type();
        });
    }, [phrases]);

    return (
        <div className="typing-section">
            <div className="typing-container">
                {/* Group 1: INTUITIVE UI and SEAMLESS UX */}
                <div className="typing-group-one">
                    <div className="typing-effect01">
                        <div className="typing-text01">
                            <div className="typing-effect-first" ref={(el) => (typingRefs.current[0] = el)}></div>
                        </div>
                        <div className="typing-text02">
                            <div className="typing-effect-second" ref={(el) => (typingRefs.current[1] = el)}></div>
                        </div>
                    </div>
                    <div className="notebook-image">
                        <img src="/main_notebook.webp" alt="notebook" />
                    </div>
                </div>

                {/* Group 2: ENGAGING INTERFACES */}
                <div className="typing-effect02">
                    <div className="typing-text03">
                        <div className="typing-effect-third" ref={(el) => (typingRefs.current[2] = el)}></div>
                    </div>
                </div>

                {/* Group 3: OPTIMIZED PERFORMANCE and CONTINUOUS GROWTH */}
                <div className="typing-group-two">
                    <div className="typing-effect03">
                        <div className="book-image">
                            <img src="/about_book.webp" alt="book" />
                            <div className="typing-text04">
                                <div className="typing-effect-fourth" ref={(el) => (typingRefs.current[3] = el)}></div>
                                <div className="typing-effect-fifth" ref={(el) => (typingRefs.current[4] = el)}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TypingEffect;