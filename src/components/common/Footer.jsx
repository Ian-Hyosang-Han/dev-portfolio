import React from 'react';

function Footer() {

    // Get dates function
    function getYear() {
        const d = new Date();
        return d.getFullYear();
    }

    return (
        <footer className="p-4 text-white text-center lg:text-[1.5rem]">
            <p>&copy; {getYear()} Ian's Portfolio - unspecialty</p>
        </footer>
    );
}

export default Footer;