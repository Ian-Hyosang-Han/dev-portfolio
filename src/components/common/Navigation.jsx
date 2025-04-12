import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Importing CSS style
import "../../styles/components/navigation.css";

const Nav = ({ navOpen, setNavOpen }) => {
    const [activePanel, setActivePanel] = useState(null);
    const [copied, setCopied] = useState(false);
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

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("Ian.han7540@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        });
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
                <p onClick={handleCopyEmail} style={{ cursor: "pointer" }}>
                    Ian.han7540@gmail.com {copied && <span style={{ marginLeft: "10px", color: "#FF5F40" }}>Copied!</span>}
                </p>
            </div>
            <button className={`accordion ${activePanel === 1 ? 'active' : ''}`} onClick={(e) => togglePanel(1, e)}>LinkedIn<span>+</span></button>
            <div className="nav-panel" style={{ display: activePanel === 1 ? 'block' : 'none' }}>
                <p>
                    <a href="https://linkedin.com/in/ian-han-hyosang" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/ian-han-hyosang
                    </a>
                </p>
            </div>
            <button className={`accordion last-accordion ${activePanel === 2 ? 'active' : ''}`} onClick={(e) => togglePanel(2, e)}>GitHub<span>+</span></button>
            <div className="nav-panel" style={{ display: activePanel === 2 ? 'block' : 'none' }}>
                <p>
                    <a href="https://github.com/Ian-Hyosang-Han" target="_blank" rel="noopener noreferrer">
                        github.com/Ian-Hyosang-Han
                    </a>
                </p>
            </div>
        </nav>
    );
}

export default Nav;