import { useNavigate } from "react-router-dom";

import '../assets/styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <h1 className="title">The Lost Ember</h1>

            <div className="content-grid">
                <div className="welcome-block">
                    <h2 className="subtitle">Welcome Adventurer</h2>
                </div>
                
                <div className="button-stack">
                    <button onClick={() => navigate('/select')}>
                        New Game
                    </button>
                    <button>Load Game</button>
                    <button>Settings</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage