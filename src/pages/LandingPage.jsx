import { useNavigate } from "react-router-dom";

import '../assets/styles/LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <h1>The Lost Ember</h1>
            <div className="button-stack">
                <button onClick={() => navigate('/select')}>
                    New Game
                </button>
                <button>Load Game</button>
                <button>Settings</button>
            </div>
        </div>
    )
}

export default LandingPage