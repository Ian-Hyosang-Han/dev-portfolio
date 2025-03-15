import '../../styles/components/launchbtn.css';

function LaunchButton( {url, label = 'launch'} ) {

    return(
        <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="custom-btn02"><span>GO!</span><span>{label}</span></button>
        </a>
    );
}

export default LaunchButton;