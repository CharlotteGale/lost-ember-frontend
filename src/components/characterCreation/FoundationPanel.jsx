import { useState, useEffect } from "react";
import FoundationCard from "./FoundationCard";

const FoundationPanel = () => {
    const [foundations, setFoundations] = useState({});
    const [selectedFoundation, setSelectedFoundation] = useState(null);

    useEffect(() => {
        fetch('/src/data/characters/foundations.json')
            .then((res) => res.json())
            .then(setFoundations);
    }, []);

    return (
        <section className="foundation-selection">
            <h2 className="subtitle">Select Your Foundation</h2>
            <div className="card-container">
                {Object.entries(foundations).map(([key, data]) => (
                    <FoundationCard 
                        key={key}
                        foundationKey={key}
                        foundationData={data}
                        selectedFoundation={selectedFoundation}
                        handleFoundationSelect={setSelectedFoundation}
                    />
                ))}
            </div>
        </section>
    )
}

export default FoundationPanel