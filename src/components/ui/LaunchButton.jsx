import '../../styles/ui/launchbtn.css';

function LaunchButton( {url, label = 'launch'} ) {

    return(
        <a href={url} 
           target="_blank" 
           rel="noreferrer">
            <button className="custom-btn02"><span>GO!</span><span>{label}</span></button>
        </a>
    );
}

export default LaunchButton;