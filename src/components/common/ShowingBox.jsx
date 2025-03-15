import "../../styles/components/showingbox.css";

function ShowingBox({ imageUrl, title }) {
    return (
        <div className="display-box">
        <div className="base-top"></div>
        <div className="base-left"></div>
        <div className="base-right"></div>
        <div className="base-bot"></div>
        {imageUrl && <img src={imageUrl} alt={title} className="project-image" />}
        <h2>{title}</h2>
    </div>
    )
}

export default ShowingBox;