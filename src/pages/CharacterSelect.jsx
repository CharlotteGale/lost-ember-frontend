import { useState, useEffect } from 'react';
import CallingCard from '../components/CallingCard.jsx';
import OriginCard from '../components/OriginCard.jsx';

import "../assets/styles/CharacterSelect.css";

const CharacterSelect = () => {
    const [origins, setOrigins] = useState({});
    const [callings, setCallings] = useState({});
    const [selectedOrigin, setSelectedOrigin] = useState(null);
    const [selectedCalling, setSelectedCalling] = useState(null);

    useEffect(() => {
        fetch("/src/data/characters/origins.json")
            .then((res) => res.json())
            .then(setOrigins);
        
        fetch("/src/data/characters/callings.json")
            .then((res) => res.json())
            .then(setCallings);
    }, []);

    return (
        <div className="character-select">
            <h1 className="title">Choose Your Character</h1>

            {/* Origin Selection */}
            <section className="section" id='origin-selection'>
                <h2 className='subtitle'>Select Your Origin</h2>
                <div className="card-container">
                    {Object.entries(origins).map(([key, data]) => (
                        <OriginCard
                            key={key}
                            originKey={key}
                            originData={data}
                            selectedOrigin={selectedOrigin}
                            handleOriginSelect={setSelectedOrigin}
                        />
                    ))}
                </div>
            </section>

            {/* Calling Selection */}
            <section className="section" id='calling-selection'>
                <h2 className='subtitle'>Select Your Calling</h2>
                <div className="card-container">
                    {Object.entries(callings).map(([key, data]) => (
                        <CallingCard
                            key={key}
                            callingKey={key}
                            callingData={data}
                            selectedCalling={selectedCalling}
                            handleCallingSelect={setSelectedCalling}
                        />
                    ))}
                </div>
            </section>

            {/* Summary */}
            <div className="summary">
                {selectedOrigin && selectedCalling ? (
                    <p>
                        You've chosen a <strong>{selectedOrigin}</strong> <strong>{selectedCalling}</strong>.
                    </p>
                ) : (
                    <p>Please select both a Origin and a Calling to continue.</p>
                )}
            </div>
        </div>
    );
};

export default CharacterSelect;