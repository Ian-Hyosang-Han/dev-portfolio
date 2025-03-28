import { useNavigate } from 'react-router-dom';
import '../../styles/components/projectbtn.css';

function ProjectButton({ label, url }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    }

    return (
        <button className="custom-btn project-btn" onClick={handleClick}>
            <span>{label}</span>
        </button>
    );
}

export default ProjectButton;