import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../common/Navigation.jsx";
import logo from "/logo.png";
import navOpneImage from "/nav-open.png";
import navCloseImage from "/nav-close.png";
// Importing CSS style file
import "../../styles/components/header.css";

function Header() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="border">
            <header className={navOpen ? "show" : ""}>
                <div className="mobile-menu">
                    <p className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </p>
                    <button
                        className="btn-main-nav"
                        onClick={() => {
                            setNavOpen(!navOpen)
                        }}
                    >
                        <span className="hamburger-icon">
                            {navOpen ? (
                                <div className="close-icon">
                                    <img src={navCloseImage} alt="Close Icon" />
                                </div>
                            ) : (
                                <div className="open-icon">
                                    <img src={navOpneImage} alt="Magnifier Icon" />
                                </div>
                            )}
                        </span>
                    </button>
                </div>
                <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
            </header>
        </div>
    );
};

export default Header;