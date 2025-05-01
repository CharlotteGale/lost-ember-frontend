import { useState, useEffect } from "react";
import LineageCard from "./LineageCard";

const LineagePanel = () => {
    const [lineages, setLineages] = useState({});
    const [selectedLineage, setSelectedLineage] = useState(null);

    useEffect(() => {
        fetch('/src/data/characters/lineage.json')
            .then((res) => res.json())
            .then(setLineages);
    }, []);

    return (
        <section className="lineage-selection">
            <h2 className="subtitle">Select Your Lineage</h2>
            <div className="card-container">
                {Object.entries(lineages).flatMap(([origin, sublineages]) => 
                    Object.entries(sublineages).map(([key, data]) => (
                        <LineageCard 
                            key={`${origin}-${key}`}
                            lineageKey={key}
                            lineageData={data}
                            selectedLineage={selectedLineage}
                            handleLineageSelect={setSelectedLineage}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default LineagePanel