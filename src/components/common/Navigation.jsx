import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Importing CSS style
import "../../styles/components/navigation.css";

const Nav = ({ navOpen, setNavOpen }) => {
    const [activePanel, setActivePanel] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const togglePanel = (panelIndex, e) => {
        e.stopPropagation();
        setActivePanel(activePanel === panelIndex ? null : panelIndex);
    };

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

    useEffect(() => {
        if (location.hash === "#home-works") {
            const targetElement = document.getElementById("home-works");
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const handleNavLinkClick = (event, targetPath) => {
        event.preventDefault();
        setNavOpen(false);

        if (location.pathname === "/") {
            if (targetPath === "/#home-works") {
                const targetElement = document.getElementById("home-works");
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            navigate(targetPath);
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className={`main-nav ${navOpen ? "show" : "hide"}`}>
            <ul className={navOpen ? "show" : "hide"}>
                <div className="nav-container">
                    <div className="nav-box">
                        <li>
                        <Link to="/" onClick={(e) => handleNavLinkClick(e, "/")}>HOME</Link>
                        </li>
                    </div>
                    <div className="nav-box">
                        <li>
                            <a href="/#home-works" onClick={(e) => handleNavLinkClick(e, "/#home-works")}>WORK</a>
                        </li>
                    </div>
                    <div className="nav-image-box">
                        <li>
                            <Link to="/" onClick={() => setNavOpen(false)}>
                                <div className="round"></div>
                            </Link>
                        </li>
                    </div>
                    <div className="nav-box">
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