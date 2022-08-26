import './FationPost.css';

function FationPost(props) {
    const {fation, onBgClick } = props;
    return (
        <div className="fation-post">
            <div className="fation-post-bg" onClick={onBgClick}/>
            <div className="fation-post-content">
                <img src={fation.thumbnailUrl}/>
                <h4>{fation.title}</h4>
            </div>
        </div>
    );
}

export default FationPost;