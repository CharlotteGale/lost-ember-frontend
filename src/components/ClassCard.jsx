const ClassCard = ({ classKey, classData, selectedClass, handleClassSelect }) => {
    return (
        <div
            className={`card ${selectedClass === classKey ? "selected" : ""}`}
            onClick={() => handleClassSelect(classKey)}
        >
            <h3>{classKey}</h3>
            <p>{classData.description}</p>
            <p className="stats">Core Stats: {classData.core_stats.join(" / ")}</p>
        </div>
    );
};

export default ClassCard;
