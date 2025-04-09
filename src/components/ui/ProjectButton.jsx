import React from 'react';
import { useNavigate } from 'react-router-dom';
// Importing CSS style
import '../../styles/ui/projectbtn.css';

function ProjectButton({ label, url }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
        window.scrollTo(0, 0);
    }

    return (
        <button className="custom-btn project-btn" onClick={handleClick}>
            <span>{label}</span>
        </button>
    );
}

export default ProjectButton;