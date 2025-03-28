import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// Importing CSS style
import "../../styles/components/navigation.css";

const Nav = ({ navOpen, setNavOpen }) => {

    // State to manage accordion panels
    const [activePanel, setActivePanel] = useState(null);

    // Function to toggle accordion panel
    const togglePanel = (panelIndex, e) => {
        e.stopPropagation(); // Prevent the navigation from closing
        setActivePanel(activePanel === panelIndex ? null : panelIndex);
    };

    // Close navigation when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navOpen && !e.target.closest(".main-nav") && !e.target.closest(".hamburger-icon")) {
                setNavOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [navOpen, setNavOpen]);

    const handleNavLinkClick = (event) => {
        const targetId = event.target.getAttribute('href')?.substring(1);
        if (targetId) {
            event.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setNavOpen(false);
    };

    return (
        <nav className={`main-nav ${navOpen ? "show" : "hide"}`}>
            <ul className={navOpen ? "show" : "hide"}>
                <div className="nav-container">
                    <div className="nav-home-box">
                        <li>
                            <Link to="/" onClick={() => setNavOpen(false)}>HOME</Link>
                        </li>
                    </div>
                    <div className="nav-work-box">
                        <li>
                            <a href="#home-works" onClick={handleNavLinkClick}>WORK</a>
                        </li>
                    </div>
                    <div className="nav-image-box">
                        <li>
                            <Link to="/" onClick={() => setNavOpen(false)}>
                                <div className="circle"></div>
                            </Link>
                        </li>
                    </div>
                    <div className="nav-about-box">
                        <li>
                            <Link to="/about" onClick={() => setNavOpen(false)}>ABOUT</Link>
                        </li>
                    </div>
                </div>
            </ul>
            <button className={`accordion ${activePanel === 0 ? 'active' : ''}`} onClick={(e) => togglePanel(0, e)}>Contact<span>+</span></button>
            <div className="nav-panel" style={{ display: activePanel === 0 ? 'block' : 'none' }}>
                <p>Ian.han7540@gmail.com</p>
            </div>
            <button className={`accordion ${activePanel === 1 ? 'active' : ''}`} onClick={(e) => togglePanel(1, e)}>Linked In<span>+</span></button>
            <div className="nav-panel" style={{ display: activePanel === 1 ? 'block' : 'none' }}>
                <p>http://linkedin.com/in/ian-han-hyosang</p>
            </div>
            <button className={`accordion last-accordion ${activePanel === 2 ? 'active' : ''}`} onClick={(e) => togglePanel(2, e)}>GitHub<span>+</span></button>
            <div className="nav-panel" style={{ display: activePanel === 2 ? 'block' : 'none' }}>
                <p>https://github.com/Ian-Hyosang-Han</p>
            </div>
        </nav>
    );
}

export default Nav;