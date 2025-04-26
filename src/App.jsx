import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage.jsx';
import CharacterSelect from './pages/CharacterSelect.jsx';
// import StatSkillSelect from './pages/StatSkillSelect.jsx';
// import CharacterDetails from './pages/CharacterDetails.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='game-container'>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/select' element={<CharacterSelect />} />
            {/* <Route path='/customize' element={<StatSkillSelect />} />
            <Route path='/finalize' element={<CharacterDetails />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App