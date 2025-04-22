import { useState, useEffect } from "react";
import "../assets/styles/CharacterSelect.css";

const CharacterSelect = () => {
    const [races, setRaces] = useState({});
    const [classes, setClasses] = useState({});
    const [selectedRace, setSelectedRace] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        fetch("/src/data/characters/races.json")
            .then((res) => res.json())
            .then(setRaces);
        
        fetch("/src/data/characters/classes.json")
            .then((res) => res.json())
            .then(setClasses);
    }, []);

    const handleRaceSelect = (raceName) => setSelectedRace(raceName);
    const handleClassSelect = (className) => setSelectedClass(className);

    return (
        <div className="character-select">
            <h1 className="title">Character Creation</h1>

            {/* Race Selection */}
            <section className="section">
                <h2>Select Your Race</h2>
                <div className="card-container">
                    {Object.entries(races).map(([key, data]) => (
                        <div
                            key={key}
                            className={`card ${selectedRace === key ? "selected" : ""}`}
                            onClick={() => handleRaceSelect(key)}
                        >
                            <h3>{key}</h3>
                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Class Selection */}
            <section className="section">
                <h2>Select Your Class</h2>
                <div className="card-container">
                    {Object.entries(classes).map(([key, data]) => (
                        <div
                            key={key}
                            className={`card ${selectedClass === key ? "selected" : ""}`}
                            onClick={() => handleClassSelect(key)}
                        >
                            <h3>{key}</h3>
                            <p>{data.description}</p>
                            <p className="stats">Core Stats: {data.core_stats.join(" / ")}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Summary */}
            <div className="summary">
                {selectedRace && selectedClass ? (
                    <p>
                        You've chosen a <strong>{selectedRace}</strong> <strong>{selectedClass}</strong>.
                    </p>
                ): (
                    <p>Please select both a race and a class to continue.</p>
                )}
            </div>
        </div>
    );
};

export default CharacterSelect;