import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// Importing CSS style
import "../styles/navigation.css";

const Nav = ({ navOpen, setNavOpen }) => {
    function closeNav(e) {
        setNavOpen(false);
    }

    // State to manage accordion panels
    const [activePanel, setActivePanel] = useState(null);

    // Function to toggle accordion panel
    const togglePanel = (panelIndex, e) => {
        e.stopPropagation(); // Prevent the navigation from closing
        setActivePanel(activePanel === panelIndex ? null : panelIndex);
    };

    // Prevent navigation closing when clicking on the navigation itself
    const preventCloseNav = (e) => {
        e.stopPropagation();
    };

    return (
        <nav className={`main-nav ${navOpen ? 'show' : 'hide'}`} onClick={closeNav}>
            <ul className={navOpen ? 'show' : 'hide'} onClick={preventCloseNav}>
                <div className="nav-container">
                    <div className="nav-home-box">
                        <li>
                            <NavLink to="/">HOME</NavLink>
                        </li>
                    </div>
                    <div className="nav-work-box">
                        <li>
                            <NavLink to="/works">WORKS</NavLink>
                        </li>
                    </div>
                    <div className="nav-image-box">
                        <li>
                            <NavLink to="/">
                                <div className="circle"></div>
                            </NavLink>
                        </li>
                    </div>
                    <div className="nav-about-box">
                        <li>
                            <NavLink to="/about">ABOUT</NavLink>
                        </li>
                    </div>
                </div>
            </ul>
            <button className={`accordion ${activePanel === 0 ? 'active' : ''}`} onClick={(e) => togglePanel(0, e)}>Contact</button>
            <div className="panel" style={{ display: activePanel === 0 ? 'block' : 'none' }}>
                <p>Ian.han7540@gmail.com</p>
            </div>
            <button className={`accordion ${activePanel === 1 ? 'active' : ''}`} onClick={(e) => togglePanel(1, e)}>Linked In</button>
            <div className="panel" style={{ display: activePanel === 1 ? 'block' : 'none' }}>
                <p>http://linkedin.com/in/ian-han-7540</p>
            </div>
            <button className={`accordion last-accordion ${activePanel === 2 ? 'active' : ''}`} onClick={(e) => togglePanel(2, e)}>GitHub</button>
            <div className="panel" style={{ display: activePanel === 2 ? 'block' : 'none' }}>
                <p>https://github.com/Ian-Hyosang-Han</p>
            </div>
        </nav>
    );
};

export default Nav;