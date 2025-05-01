import { useState, useEffect } from 'react';
import CallingPanel from '../components/characterCreation/CallingPanel.jsx';
import OriginPanel from '../components/characterCreation/OriginPanel.jsx';

import FoundationPanel from '../components/characterCreation/FoundationPanel.jsx';

import "../assets/styles/CharacterSelect.css";

const CharacterSelect = () => {
    const [activePanel, setActivePanel] = useState('origin');

    return (
        <div className="character-select">
            <header className='header'>
                <h1 className="title">Choose Your Character</h1>
            </header>

            <div className='character-body'>
                <nav className='nav-stack'>
                    <button
                        onClick={() => setActivePanel('origin')}
                        className={activePanel === 'origin' ? 'active' : ''}
                    >Origin</button>
                    <button disabled>Lineage</button>
                    <button disabled>Calling</button>
                    <button disabled>Foundation</button>
                </nav>

                <div className='display-area'>
                    {activePanel === 'origin' && <OriginPanel />}
                    {/* {activePanel === 'lineage' && <LineagePanel />} */}
                    {activePanel === 'calling' && <CallingPanel />}
                    {activePanel === 'foundation' && <FoundationPanel />}
                </div>
            </div>
        </div>
    )
}

export default CharacterSelect



// const CharacterSelect = () => {
//     const [origins, setOrigins] = useState({});
//     const [callings, setCallings] = useState({});
//     const [selectedOrigin, setSelectedOrigin] = useState(null);
//     const [selectedCalling, setSelectedCalling] = useState(null);

//     useEffect(() => {
//         fetch("/src/data/characters/origins.json")
//             .then((res) => res.json())
//             .then(setOrigins);
        
//         fetch("/src/data/characters/callings.json")
//             .then((res) => res.json())
//             .then(setCallings);
//     }, []);

//     return (
//         <div className="character-select">
//             <h1 className="title">Choose Your Character</h1>

//             {/* Origin Selection */}
//             <section className="section" id='origin-selection'>
//                 <h2 className='subtitle'>Select Your Origin</h2>
//                 <div className="card-container">
//                     {Object.entries(origins).map(([key, data]) => (
//                         <OriginCard
//                             key={key}
//                             originKey={key}
//                             originData={data}
//                             selectedOrigin={selectedOrigin}
//                             handleOriginSelect={setSelectedOrigin}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Calling Selection */}
//             <section className="section" id='calling-selection'>
//                 <h2 className='subtitle'>Select Your Calling</h2>
//                 <div className="card-container">
//                     {Object.entries(callings).map(([key, data]) => (
//                         <CallingCard
//                             key={key}
//                             callingKey={key}
//                             callingData={data}
//                             selectedCalling={selectedCalling}
//                             handleCallingSelect={setSelectedCalling}
//                         />
//                     ))}
//                 </div>
//             </section>

//             {/* Summary */}
//             <div className="summary">
//                 {selectedOrigin && selectedCalling ? (
//                     <p>
//                         You've chosen a <strong>{selectedOrigin}</strong> <strong>{selectedCalling}</strong>.
//                     </p>
//                 ) : (
//                     <p>Please select both a Origin and a Calling to continue.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CharacterSelect;