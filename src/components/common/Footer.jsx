function Footer() {

    // Get dates function
    function getYear() {
        const d = new Date();
        return d.getFullYear();
    }

    return (
        <footer className="p-4 text-white text-right md: text-base lg:text-2xl ">
            <p>&copy; {getYear()} Ian's Portfolio</p>
            <p>unspecialty</p>
        </footer>
    );
}

export default Footer;