
const RaceCard = ({ raceKey, raceData, selectedRace, handleRaceSelect }) => {
    return (
        <div
            className={`card ${selectedRace === raceKey ? "selected" : ""}`}
            onClick={() => handleRaceSelect(raceKey)}
        >
            <h3>{raceKey}</h3>
            <p>{raceData.description}</p>
        </div>
    );
};

export default RaceCard;
