import './FationItem.css';

function FationItem(props) {
    const { fation, onFationClick } = props;
    return (
        <div className='fation-item'>
        <img src={fation.thumbnailUrl} onClick={ () => {onFationClick(fation)}} />
        <h4> {fation.title} </h4>
        </div>
    );
}

export default FationItem;