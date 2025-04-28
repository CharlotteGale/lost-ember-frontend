const OriginCard = ({ originKey, originData, selectedOrigin, handleOriginSelect }) => {
    return (
        <div
            className={`card ${selectedOrigin === originKey ? "selected" : ""}`}
            onClick={() => handleOriginSelect(originKey)}
        >
            <h3>{originKey}</h3>
            <p>{originData.description}</p>
            
        </div>
    );
};

export default OriginCard;
