import { useState, useEffect } from 'react';
import RaceCard from '../components/RaceCard.jsx';
import ClassCard from '../components/ClassCard.jsx';

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

    return (
        <div className="character-select">
            <h1 className="title">Choose Your Character</h1>

            {/* Race Selection */}
            <section className="section" id='race-selection'>
                <h2 className='subtitle'>Select Your Race</h2>
                <div className="card-container">
                    {Object.entries(races).map(([key, data]) => (
                        <RaceCard
                            key={key}
                            raceKey={key}
                            raceData={data}
                            selectedRace={selectedRace}
                            handleRaceSelect={setSelectedRace}
                        />
                    ))}
                </div>
            </section>

            {/* Class Selection */}
            <section className="section" id='class-selection'>
                <h2 className='subtitle'>Select Your Class</h2>
                <div className="card-container">
                    {Object.entries(classes).map(([key, data]) => (
                        <ClassCard
                            key={key}
                            classKey={key}
                            classData={data}
                            selectedClass={selectedClass}
                            handleClassSelect={setSelectedClass}
                        />
                    ))}
                </div>
            </section>

            {/* Summary */}
            <div className="summary">
                {selectedRace && selectedClass ? (
                    <p>
                        You've chosen a <strong>{selectedRace}</strong> <strong>{selectedClass}</strong>.
                    </p>
                ) : (
                    <p>Please select both a race and a class to continue.</p>
                )}
            </div>
        </div>
    );
};

export default CharacterSelect;