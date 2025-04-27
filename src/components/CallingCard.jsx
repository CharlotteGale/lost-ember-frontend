
const CallingCard = ({ callingKey, callingData, selectedCalling, handleCallingSelect }) => {
    return (
        <div
            className={`card ${selectedCalling === callingKey ? "selected" : ""}`}
            onClick={() => handleCallingSelect(callingKey)}
        >
            <h3>{callingKey}</h3>
            <p>{callingData.description}</p>
            <p className="stats">Core Stats: {callingData.core_stats.join(" / ")}</p>
        </div>
    );
};

export default CallingCard;
