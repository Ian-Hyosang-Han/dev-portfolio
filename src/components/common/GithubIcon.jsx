import { FaGithubSquare } from "react-icons/fa";

function GithubIcon({ url }) {

    return (
        <a href={url} 
           target="_blank" 
           rel="noopener noreferrer"
           className="github-icon">
            <FaGithubSquare size={45} className='fill-white' />
        </a>
    );
}

export default GithubIcon;