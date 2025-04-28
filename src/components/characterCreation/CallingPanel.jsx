import { useState, useEffect } from "react";
import CallingCard from "./CallingCard";

const CallingPanel = () => {
    const [callings, setCallings] = useState({});
    const [selectedCalling, setSelectedCalling] = useState(null);

    useEffect(() => {
        fetch('/src/data/characters/callings.json')
            .then((res) => res.json())
            .then(setCallings);
    }, []);

    return (
        <section className="calling-selection">
            <h2 className="subtitle">Select Your Calling</h2>
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
    )
}

export default CallingPanel