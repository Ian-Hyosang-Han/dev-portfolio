import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = ({ navOpen, setNavOpen }) => {
    function closeNav(e) {
        setNavOpen(false)
    }

    // State to manage visibility based on screen width
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);

    // Function to handle window resize
    const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 768);
    };

    // Effect to add window resize listener
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`main-nav ${navOpen || isWideScreen ? 'show' : 'hide'}`}
            onClick={closeNav}>
            <ul className={navOpen || isWideScreen ? 'show' : 'hide'}>
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
                        <NavLink to="/"></NavLink>
                    </li>
                </div>
                <div className="nav-about-box">
                    <li>
                        <NavLink to="/about">ABOUT</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );

}

export default Nav;