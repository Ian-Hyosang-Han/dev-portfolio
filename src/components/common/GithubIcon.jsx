import '../../styles/components/githubicon.css';
import githubIcon from '../../media/github-96.png';

function GithubIcon(url) {

    return (
        <a href={url} 
           target="_blank" 
           rel="noopener noreferrer">
        <img 
            src={githubIcon} 
            alt="GitHub Icon" 
            className="github-icon" />
        </a>
    );
}

export default GithubIcon;