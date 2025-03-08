import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Navigation.jsx"
import logo from "../media/logo.png";
import navOpneImage from "../media/nav-open.png";
import navCloseImage from "../media/nav-close.png";

function Header() {

    const [ navOpen, setNavOpen ] = useState(false);

    return (
        <div className="navbar">
        <header className={navOpen ? "show" : "" }>
            <div className="mobile-menu">
                <Link to="/">
                <img src={logo} alt="logo" />
                </Link>
                <button 
                    className="btn-main-nav"
                    onClick={() => {
                        setNavOpen(!navOpen)
                    }}
                    aria-label={navOpen ? "Close Menu" : "Open Menu"}
                    >
                    {navOpen ? (
                        <img src={navCloseImage} alt="nav-close" />
                    ) : (
                        <img src={navOpneImage} alt="nav-open" />
                    )}
                </button>
            </div>
            <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        </header>
        </div>
    );
}

export default Header;