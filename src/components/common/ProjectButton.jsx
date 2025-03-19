import { useNavigate } from 'react-router-dom';
import '../../styles/components/projectbtn.css';

function ProjectButton({ label, url }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }

    return (
        <a href={url}
           target='blank'
           rel="noreferrer">
            <button className="custom-btn project-btn" onClick={handleClick}><span>{label}</span></button>
        </a>
    );
}

export default ProjectButton;