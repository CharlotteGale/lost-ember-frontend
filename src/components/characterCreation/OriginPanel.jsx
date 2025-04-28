import { useState, useEffect } from "react";
import OriginCard from './OriginCard.jsx';

const OriginPanel = () => {
    const [origins, setOrigins] = useState({});
    const [selectedOrigin, setSelectedOrigin] = useState(null);

    useEffect(() => {
        fetch("/src/data/characters/origins.json")
            .then((res) => res.json())
            .then(setOrigins)
    }, []);

    return (
        <section className="origin-selection">
            <h2 className="subtitle">Select Your Origin</h2>
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
    )
}

export default OriginPanel